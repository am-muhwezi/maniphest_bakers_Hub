from flask_restx import Resource,Namespace
from ..models.users import User


users_namespace=Namespace('users',description='Users operations')


@users_namespace.route('/users')
class UserGetCreate(Resource):

    def get(self):
        """
            Get all users
        """
        pass

    def post(self):
        """
            Create a user
        """
        pass

@users_namespace.route('/users/<int:user_id>')
class UserGetUpdateDelete(Resource):

    def get(self, user_id):
        """
            Get a user by id
        """
        pass

    def put(self, user_id):
        """
            Update a user by id
        """
        pass

    def delete(self, user_id):
        """
            Delete a user by id
        """
        pass

@users_namespace.route('/users/<int:user_id>/orders/')
class GetUserOrders(Resource):

    def get(self, user_id):
        """
            Get all orders for a user
        """
        pass
