from flask_restx import Namespace,Resource,fields
from flask import request
from ..models.users import User
from werkzeug.security import generate_password_hash,check_password_hash


auth_namespace = Namespace('auth', description='Authentication operations')
signup_model = auth_namespace.model(
    'User',{
        'id':fields.Integer(readOnly=True,description='The user unique identifier'),
        'fullname':fields.String(required=True,description='User fullname'),
        'email':fields.String(required=True,description='User email'),
        'password':fields.String(required=True,description='User password')
})

@auth_namespace.route('/signup')
class Signup(Resource):

    @auth_namespace.expect(signup_model)
    @auth_namespace.marshal_with(signup_model)
    def post(self):
        """
            Create a new user
        """
        data=request.get_json()


        new_user=User(
            fullname=data.get('fullname'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password'))
        )

        new_user.save()



        return new_user, HTTPStatus.CREATED



@auth_namespace.route('/login')
class Login(Resource):

    def post(self):
        """
            Generate a JWT & Login a user
        """
        pass