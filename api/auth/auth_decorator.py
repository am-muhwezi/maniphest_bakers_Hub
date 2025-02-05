from functools import wraps
from flask_jwt_extended import get_jwt_identity
from ..models.users import User
from http import HTTPStatus



def admin_required():


    def wrapper(func):
        @wraps(func)

        def decorator(*args, **kwargs):
            current_user_email=get_jwt_identity()
            user=User.query.filter_by(email=current_user_email).first()


            if user.role != 'admin':
                return {'message':'Admin access required'},HTTPStatus.FORBIDDEN
            
            return func(*args, **kwargs)
        return decorator
    return wrapper


def baker_required():
    def wrapper(func):
        @wraps(func)

        def decorator(*args, **kwargs):
            current_user_email=get_jwt_identity()
            user=User.query.filter_by(email=current_user_email['email']).first()


            if user.role != 'baker':
                return {'message':'Baker access required'},403
            
            return func(*args, **kwargs)
        return decorator
    return wrapper


def client_required():
    def wrapper(func):
        @wraps(func)

        def decorator(*args, **kwargs):
            current_user_email=get_jwt_identity()
            user=User.query.filter_by(email=current_user_email).first()


            if user.role != 'client':
                return {'message':'Client access required'},403
            
            return func(*args, **kwargs)
        return decorator
    return wrapper
