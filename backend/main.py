from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import requests, json, random
from geoip import geolite2
import geocoder

app = Flask(__name__)
app.config['SECRET_KEY'] = 'linuxdegilgnulinux'
CORS(app)

# Create some test data for our catalog in the form of a list of dictionaries.

films = []

for i in range(1, 100):
    r = requests.get(
        f"https://www.omdbapi.com/?apikey=47e5bb2c&s=test&type=movie&page={i}"
    )
    films.append(json.loads(r.content))


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({"error": "Not found"}), 404)


@app.errorhandler(500)
def internal_server(error):
    return make_response(jsonify({"error": "Internal Server"}), 500)


@app.route("/", methods=["GET"])
def home():
    return "Test"


# A route to return all of the available entries in our catalog.
@app.route("/api/v1/resources/films", methods=["GET"])
def all_films():
    return jsonify(films)


@app.route("/api/v1/resources/ip_addr", methods=["GET"])
def get_id_addr():
    ip_addr = request.environ.get('HTTP_X_REAL_IP', request.remote_addr)
    info = geocoder.ip(ip_addr)
    info = info.geojson

    return jsonify({"info": info})


# @app.route("/api/v1/resources/films/<int:id>", methods=["GET"])
# def specific_film(id):
#     try:
#         return jsonify(films[id])
#     except IndexError:
#         return make_response(jsonify({"error": "List out of range"}), 404)


if __name__ == "__main__":
    app.run(debug=False)
