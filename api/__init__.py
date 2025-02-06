from flask import Flask
from flask_restx import Api
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from .auth.views import auth_namespace
from .orders.views import orders_namespace
from .pastries.views import pastry_namespace
from .users.views import users_namespace
from .config.config import config_dict
from .utils import db
from .models.orders import Orders
from .models.pastries import Pastries
from .models.users import User
from flask_migrate import Migrate
from werkzeug.exceptions import NotFound, MethodNotAllowed


def create_app(config=config_dict['dev']):
    app = Flask(__name__)

    

    app.config.from_object(config)
    

    migrate=Migrate(app, db)


    
    api=Api(app, title='Maniphest Bakers API', version='1.0', description='Maniphest Bakers Hub API')
    api.add_namespace(auth_namespace)
    api.add_namespace(orders_namespace)
    api.add_namespace(pastry_namespace, path='/pastry')
    api.add_namespace(users_namespace)

    db.init_app(app)
    jwt=JWTManager(app)


    @api.errorhandler(NotFound)
    def not_found_error(e):
        return {'message': 'Rizz not found'},404
    
    @app.errorhandler(MethodNotAllowed)
    def method_not_allowed_error(e):
        return {'message': 'Man, Method not allowed'},405

    @app.shell_context_processor
    def make_shell_context():
        return {
            'db': db,
            'Orders': Orders,
            'Pastries': Pastries,
            'User': User
        }


    return app