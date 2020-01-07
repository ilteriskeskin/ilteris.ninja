from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)
app.config['SECRET_KEY'] = 'linuxdegilgnulinux'


@app.route('/', methods=['GET', 'POST'])
def base():
	ip_addr = request.environ.get('HTTP_X_REAL_IP', request.remote_addr)
	file = open('ip.txt', 'a')
	file.write(ip_addr)
	file.close()

	if request.method == 'POST':
		url = 'https://api.github.com/users/' + request.form['data']
		response = requests.get(url)
		datas = response.json()
		datas = dict(datas)
		return render_template('index.html', datas=datas)
	else:
		return render_template('index.html')