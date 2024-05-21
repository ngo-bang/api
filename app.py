from flask import Flask, jsonify, request, render_template
import json
import pymongo
app = Flask(__name__)
database = pymongo.MongoClient("mongodb://localhost:27017/")
users = database["VDT"]["Student"]

if __name__=='__main__':
    app.run(host='0.0.0.0', port=9999, debug=True)