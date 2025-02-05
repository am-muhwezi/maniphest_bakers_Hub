from ..utils import db
from datetime import datetime

class Pastries(db.Model):
    __tablename__ = 'pastries'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(80),nullable=False)
    price=db.Column(db.Float,nullable=False)
    description=db.Column(db.Text)
    is_available=db.Column(db.Boolean,default=True)
    created_at=db.Column(db.DateTime(),default=datetime.utcnow)
    updated_at=db.Column(db.DateTime(),default=datetime.utcnow)


    user_id=db.Column(db.Integer, db.ForeignKey('users.id'))
    orders=db.relationship('Orders',backref='pastry',lazy=True)
    user=db.relationship('User',backref='pastry',lazy=True)
    bakers=db.relationship('User',backref='baker',lazy=True)

    def __repr__(self):
        return f"<Pastry {self.name}>"
    

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def get_pastry_by_id(cls, id):
        return cls.query.get_or_404(id)
