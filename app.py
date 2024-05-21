from flask import Flask, jsonify, request, render_template
import json
import pymongo
app = Flask(__name__)
database = pymongo.MongoClient("mongodb://localhost:27017/")
users = database["VDT"]["Student"]
@app.route('/')
def render_index():
    return render_template ('index.html')

@app.route('/api/list', methods=['GET'])
def get_users():
    response = []
    for i in users.find():
        response.append(i)
        
    return json.dumps(response, ensure_ascii=False).encode('utf-8')

if __name__=='__main__':
    app.run(host='0.0.0.0', port=9999, debug=True)