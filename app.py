from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def base():
	if request.method == 'POST':
		url = 'https://api.github.com/users/' + request.form['data']
		response = requests.get(url)
		datas = response.json()
		datas = dict(datas)
		return render_template('index.html', datas=datas)
	else:
		return render_template('index.html')