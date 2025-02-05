from flask_restx import Resource,Namespace,fields
from flask_jwt_extended import get_jwt_identity,jwt_required
from ..models.orders import Orders
from ..models.users import User
from http import HTTPStatus
from ..auth.auth_decorator import admin_required,baker_required,client_required

orders_namespace = Namespace('orders', description='Orders operations')

order_model=orders_namespace.model(
    'Order',{
        'id': fields.Integer(readOnly=True, description='The order unique identifier'),
        'quantity': fields.Integer(required=True, description='The quantity of the order'),
        'user_id': fields.Integer(required=True, description='The user unique identifier'),
        'order_status': fields.String(readOnly=True, description='The status of the order',
                                      required=True, enum=['PENDING', 'ENROUTE', 'DELIVERED', 'CANCELLED']),
        'created_at': fields.DateTime(readOnly=True, description='The date the order was created'),
        'updated_at': fields.DateTime(readOnly=True, description='The date the order was last updated'),
        'total': fields.Float(description='The total amount of the order'),
        'pastry_id': fields.Integer(required=True, description='The pastry unique identifier')

    }
)

@orders_namespace.route('/orders')
class OrderGetCreate(Resource):
    """
        Get all orders and create an order
    """

    @jwt_required()
    @admin_required()
    @orders_namespace.marshal_with(order_model)
    def get(self):
        """
            Get all orders for admin
        """
        orders=Orders.query.all()
        return orders,HTTPStatus.OK

    @jwt_required()
    @orders_namespace.expect(order_model)
    @orders_namespace.marshal_with(order_model)
    def post(self):
        """
            Create an order
        """

        email=get_jwt_identity()



        current_user=User.query.filter_by(email=email).first()


        data=orders_namespace.payload
        new_order=Orders(
            quantity=data['quantity'],
        )

        new_order.user=current_user

        new_order.saves_to_db()

        return new_order,HTTPStatus.CREATED

@orders_namespace.route('/orders/<int:order_id>')
class OrderGetUpdateDelete(Resource):

    def get(self, order_id):
        """
            Get an order by id
        """
        pass
        

    def put(self, order_id):
        """
            Update an order by id
        """
        pass

    def delete(self, order_id):
        """
            Delete an order by id
        """
        pass

@orders_namespace.route('/users/<int:user_id>/order/<int:order_id>/')
class GetSpecificOrderByUser(Resource):

    def get(self,user_id,order_id):
        """
            Get a specific order for a user
        """
        pass


@orders_namespace.route('/users/<int:user_id>/orders/')
class GetUserOrders(Resource):

    def get(self,user_id):
        """
            Get all orders for a user
        """
        pass

@orders_namespace.route('/orders/status/<int:order_id>')
class UpdateOrderStatus(Resource):

    def patch (self,order_id):
        """
            Update the status of an order
        """
        pass