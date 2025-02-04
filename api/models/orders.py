from ..utils import db
from datetime import datetime
from enum import Enum


class OrderStatus(Enum):
    PENDING = 'Pending'
    ENROUTE = 'Enroute'
    DELIVERED = 'Delivered'
    CANCELLED = 'Cancelled'

class Orders(db.Model):
    __tablename__ = 'orders'

    id=db.Column(db.Integer, primary_key=True)
    quantity=db.Column(db.Integer,nullable=False)
    total=db.Column(db.Float,nullable=False)
    created_at=db.Column(db.DateTime(),default=datetime.utcnow)
    updated_at=db.Column(db.DateTime(),default=datetime.utcnow)
    order_status=db.Column(db.Enum(OrderStatus),default=OrderStatus.PENDING)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    pastry_id=db.Column(db.Integer,db.ForeignKey('pastries.id'), nullable=False)

    def __repr__(self):
        return f"<Order {self.id}>"