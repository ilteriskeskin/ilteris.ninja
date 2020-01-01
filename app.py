from flask import Flask, render_template, request, jsonify, send_from_directory

app = Flask(__name__)

@app.route('/')
def base():
    return render_template('index.html')