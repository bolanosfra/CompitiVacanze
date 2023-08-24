from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

# Stringa di connessione al DB
app.config["MONGO_URI"] = "mongodb+srv://root:pass@cluster0.olw9u.mongodb.net/Avengers" #Importante qui va specificato il nome del DB

mongo = PyMongo(app)
# Per rispondere alle chiamate cross origin
CORS(app)
@app.route('/capitan', methods=['GET'])
def get_capitan():
    locations = mongo.db.locations
    output = []
    for s in locations.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})

    return jsonify(output[random.randrange(0, len(output))])

@app.route('/thor', methods=['GET'])
def get_thor():
    locations = mongo.db.locations
    output = []
    for s in locations.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})

    return jsonify(output[random.randrange(0, len(output))])

@app.route('/spider', methods=['GET'])
def get_spider():
    locations = mongo.db.locations
    output = []
    for s in locations.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})

    return jsonify(output[random.randrange(0, len(output))])


@app.route('/iron', methods=['GET'])
def get_iron():
    locations = mongo.db.locations
    output = []
    for s in locations.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})

    return jsonify(output[random.randrange(0, len(output))])


@app.route('/all', methods=['GET'])
def get_all_addresses():
    locations = mongo.db.locations
    output = []
    for s in locations.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})
                            
    return jsonify(output)    








# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run(debug=True)