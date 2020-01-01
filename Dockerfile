FROM python:3.7-alpine
WORKDIR /code
ENV FLASK_APP wsgi.py
ENV FLASK_RUN_HOST 0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip3 install --upgrade pip 
RUN pip3 install -r requirements.txt
RUN pip3 install flask-sqlalchemy gunicorn
COPY . .
CMD ["flask", "run"]