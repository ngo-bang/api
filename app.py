from flask import Flask, jsonify, request, render_template
import json
import pymongo
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
database = pymongo.MongoClient("mongodb://localhost:27017/")
users = database["VDT"]["Student"]
@app.route('/')
def render_index():
    return render_template ('index.html')

@app.route('/create')
def render_create():
    return render_template ('create.html')

@app.route('/detail/<_id>')
def render_update(_id):
    data={'_id':_id}
    return render_template ('update.html',data=data)

@app.route('/api/list', methods=['GET'])
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

    return json.dumps(response, ensure_ascii=False).encode('utf-8')

@app.route('/api/create', methods=['POST'])
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

    return jsonify(data)

@app.route('/api/delete/<_id>', methods=['DELETE'])
def remove(_id):

    users.delete_one({"_id": _id})

    return jsonify({
        "message": "{} removed".format(_id)
    })
    
@app.route('/api/get/<_id>', methods=["GET"])
def get_user(_id):
    
    response = users.find_one({"_id":_id})

    return json.dumps(response, ensure_ascii=False).encode('utf-8')

@app.route('/api/update', methods=["PUT"])
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
    return jsonify(data)

if __name__=='__main__':
    app.run(host='0.0.0.0', port=9999, debug=True)