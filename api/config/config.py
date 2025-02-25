import os
from decouple import config
from datetime import timedelta

BASE_DIR=os.path.dirname(os.path.realpath(__file__))

class Config:

    SECRET_KEY=config('SECRET_KEY', 'secret')
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    JWT_ACCESS_TOKEN_EXPIRES=timedelta(hours=1)
    JWT_ACCESS_REFRESH_EXPIRES=timedelta(hours=1)
    JWT_SECRET_KEY=config('JWT_SECRET_KEY')


class DevConfig(Config):
    DEBUG=config('DEBUG',cast=bool)
    SQLALCHEMY_ECHO=True
    SQLALCHEMY_DATABASE_URI='sqlite:///'+os.path.join(BASE_DIR,'dev.db')


class TestConfig(Config):
    pass

class ProdConfig(Config):
    pass


config_dict = {
    'dev': DevConfig,
    'test': TestConfig,
    'prod': ProdConfig,
}
