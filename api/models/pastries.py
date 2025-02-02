from ..utils import db
from datetime import datetime

class Pastries(db.Model):
    __tablename__ = 'pastries'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(80),unique=True,nullable=False)
    price=db.Column(db.Float,nullable=False)
    is_available=db.Column(db.Boolean,default=True)
    created_at=db.Column(db.DateTime(),default=datetime.utcnow)
    updated_at=db.Column(db.DateTime(),default=datetime.utcnow)

    orders=db.relationship('Orders',backref='pastry',lazy=True)
    user=db.relationship('Users',backref='pastry',lazy=True)
    bakers=db.relationship('Users',backref='baker',lazy=True)

    def __repr__(self):
        return f"<Pastry {self.name}>"