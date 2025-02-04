from flask_restx import Resource, Namespace



# Create a namespace for the orders operations
orders_namespace = Namespace('orders', description='Orders operations')



@orders_namespace.route('/orders')
class OrderGetCreate(Resource):

    def get(self):
        """
            Get all orders
        """
        pass

    def post(self):
        """
            Create an order
        """
        pass

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