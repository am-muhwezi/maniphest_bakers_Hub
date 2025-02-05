from http import HTTPStatus
from flask import request
from flask_restx import Namespace,Resource,fields
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import(create_access_token,
create_refresh_token, jwt_required, get_jwt_identity)
from ..models.users import User
from ..auth.auth_decorator import admin_required,baker_required,client_required




auth_namespace = Namespace('auth', description='Authentication operations')
signup_model = auth_namespace.model(
    'User',{
        'id':fields.Integer(readOnly=True,description='The user unique identifier'),
        'fullname':fields.String(required=True,description='User fullname'),
        'email':fields.String(required=True,description='User email'),
        'password':fields.String(required=True,description='User password')
})

user_model = auth_namespace.model(
    'User',{
        'id':fields.Integer(readOnly=True,description='The user unique identifier'),
        'fullname':fields.String(required=True,description='User fullname'),
        'email':fields.String(required=True,description='User email'),
        'password':fields.String(required=True,description='User password'),
        'role':fields.String(required=True,description='User role'),
        'is_active':fields.Boolean(readOnly=True,description='User is active')
})

login_model = auth_namespace.model(
    'Login',{
        'email':fields.String(required=True,description='User email'),
        'password':fields.String(required=True,description='User password'),
        'role':fields.String(required=True,description='User role')
})

@auth_namespace.route('/signup')
class Signup(Resource):

    @auth_namespace.expect(signup_model)
    @auth_namespace.marshal_with(user_model)
    def post(self):
        """
            Create a new user
        """
        data=request.get_json()

        role=data.get('role', 'client')

        if role not in ['admin','baker','client']:
            return {'message':'Invalid role'},HTTPStatus.BAD_REQUEST


        new_user=User(
            fullname=data.get('fullname'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password')),
            role=role
        )

        new_user.save()

        return new_user,HTTPStatus.CREATED

@auth_namespace.route('/login')
class Login(Resource):

    @auth_namespace.expect(login_model)
    def post(self):
        """
            Generate a JWT & Login a user
        """
        data=request.get_json()

        email=data.get('email')
        password=data.get('password')


        user=User.query.filter_by(email=email).first()

        if (user is not None) and check_password_hash(user.password,password):
            access_token=create_access_token(identity=email)
            refresh_token=create_refresh_token(identity=email)


            response={
                'access_token':access_token,
                'refresh_token':refresh_token
            }

            return response, HTTPStatus.OK
