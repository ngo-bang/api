from flask import Flask, jsonify, request
import json
import pymongo
from flask_cors import CORS, cross_origin
import os
from prometheus_flask_exporter import PrometheusMetrics
from flask_httpauth import HTTPBasicAuth

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
metrics = PrometheusMetrics(app,group_by='endpoint')

MONGO_HOST = os.getenv('MONGO_HOST', '172.18.0.20')
MONGO_PORT = int(os.getenv('MONGO_PORT', '27017'))
database = pymongo.MongoClient( f"mongodb://{MONGO_HOST}:{MONGO_PORT}")

users = database["VDT"]["Student"]
auth = HTTPBasicAuth()

userdata={
    "admin": "admin",
    "user": "user",
}
roles = {
    "user": "user",
    "admin": ["user", "admin"],
}

@auth.get_user_roles
def get_user_roles(username):
    return roles.get(username)

@auth.verify_password
def verify(username, password):
    if username in userdata and userdata.get(username)==password:
        return username
    
@app.route('/api/list', methods=['GET'])
@auth.login_required(role=['user','admin'])
def get_users():
    response = []
    for i in users.find():
        obj= {
        "_id" :i['_id'],
        "Họ và tên":i['Họ và tên'],
        "Giới tính":i['Giới tính'],
        "Trường":i['Trường'],
        }
        response.append(obj)

    return json.dumps(response, ensure_ascii=False).encode('utf-8'),200

@app.route('/api/create', methods=['POST'])
@auth.login_required(role='admin')
def create():
    data = request.get_json()
    obj = {
        "_id" :data['_id'],
        "Họ và tên":data['Họ và tên'],
        "Năm":data['Năm'],
        "Giới tính":data['Giới tính'],
        "Trường":data['Trường'],
        "Quốc gia":data['Quốc gia']
        }

    users.insert_one(obj)

    return jsonify(data),201

@app.route('/api/delete/<_id>', methods=['DELETE'])
@auth.login_required(role='admin')
def remove(_id):

    users.delete_one({"_id": _id})

    return jsonify({
        "message": "{} removed".format(_id)
    }),222

@app.route('/api/get/<_id>', methods=["GET"])
@auth.login_required(role=['user','admin'])
def get_user(_id):
    
    response = users.find_one({"_id":_id})

    return json.dumps(response, ensure_ascii=False).encode('utf-8'),200

@app.route('/api/update', methods=["PUT"])
@auth.login_required(role='admin')
def update():
    data = request.get_json()
    obj = {
        "_id" :data['_id'],
        "Họ và tên":data['Họ và tên'],
        "Năm":data['Năm'],
        "Giới tính":data['Giới tính'],
        "Trường":data['Trường'],
        "Quốc gia":data['Quốc gia']
        }
    id=data['_id']
    users.update_one({'_id':id},{'$set':obj})
    return jsonify({
        "message": "{} updated".format(id)
    }),201

@auth.error_handler
def unauthorized():
    response = jsonify({'message':'Not authorized'})
    return response, 403
if __name__=='__main__':
    app.run(host='0.0.0.0', port=9999, debug=False)