from flask_restx import Resource,Namespace,fields
from ..models.users import User
from http import HTTPStatus


users_namespace=Namespace('users',description='Users operations')
users_model=users_namespace.model(
    'Users',{
        'id':fields.Integer(readOnly=True,description='The user unique identifier'),
        'fullname':fields.String(required=True,description='The user fullname'),
        'email':fields.String(required=True,description='The user email'),
        'role':fields.String(description='The user role'),
        'is_active':fields.Boolean(description='The user status'),
        'created_at':fields.DateTime(description='The user creation date'),
        'updated_at':fields.DateTime(description='The user last update date')
})



@users_namespace.route('/users')
class UserGetCreate(Resource):


    @users_namespace.marshal_with(users_model)
    def get(self):
        """
            Get all users
        """
        return User.query.all()


    @users_namespace.expect(users_model)
    @users_namespace.marshal_with(users_model)
    def post(self):
        """
            Create a user
        """
        data=users_namespace.payload

        new_user=User(fullname=data['fullname'],email=data['email'],password=data['password'])

        new_user.save()

        return new_user,HTTPStatus.CREATED

@users_namespace.route('/users/<int:user_id>')
class UserGetUpdateDelete(Resource):

    @users_namespace.marshal_with(users_model)
    def get(self, user_id):
        """
            Get a user by id
        """
        user=User.get_user_by_id(user_id)

        return user,HTTPStatus.OK

    def put(self, user_id):
        """
            Update a user by id
        """
        user_to_update=User.get_user_by_id(user_id)

        data=users_namespace.payload

        user_to_update.fullname=data['fullname']

        user_to_update.save()

        return user_to_update,HTTPStatus.OK

    def delete(self, user_id):
        """
            Delete a user by id
        """
        user_to_delete=User.get_user_by_id(user_id)

        user_to_delete.delete()

        return user_to_delete,HTTPStatus.NO_CONTENT
