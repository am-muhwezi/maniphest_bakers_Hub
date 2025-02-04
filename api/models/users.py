from ..utils import db
from datetime import datetime


class User(db.Model):
    __tablename__ = 'users'

    id=db.Column(db.Integer, primary_key=True)
    fullname=db.Column(db.String(80),nullable=False)
    email=db.Column(db.String(90),unique=True,nullable=False)
    password=db.Column(db.String(80),nullable=False)
    created_at=db.Column(db.DateTime(),default=datetime.utcnow)
    updated_at=db.Column(db.DateTime(),default=datetime.utcnow)
    is_staff=db.Column(db.Boolean,default=False)
    is_active=db.Column(db.Boolean,default=True)

    orders=db.relationship('Orders',backref='user',lazy=True)
    pastries=db.relationship('Pastries',backref='owner',lazy=True)

    def __repr__(self):
        return f"<User {self.fullname}>"
    
    def save(self):
        db.session.add(self)
        db.session.commit()