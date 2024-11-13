from . import db
from datetime import datetime

# User model for both customers and Bakers

class User(db.Model):
    __tablename__ = 'users'


    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(1000), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
