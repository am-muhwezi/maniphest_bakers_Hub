from flask_restx import Resource, Namespace,fields
from ..models.pastries import Pastries
from http import HTTPStatus
from ..utils import db


pastry_namespace = Namespace('pastry', description='Pastry operations')

pastry_model=pastry_namespace.model(
    'Pastry',{
        'id':fields.Integer(readOnly=True,description='The pastry unique identifier'),
        'name':fields.String(required=True,description='Pastry name'),
        'price':fields.Float(required=True,description='Pastry price'),
        'description':fields.String(description='Pastry description'),
        'is_available':fields.Boolean(readOnly=True,description='Pastry is available'),
})


@pastry_namespace.route('/pastry')
class PastryGetCreate(Resource):

    @pastry_namespace.marshal_with(pastry_model)
    def get(self):
        """
            Get all pastries
        """
        pastry=Pastries.query.all()
        return pastry,HTTPStatus.OK

    @pastry_namespace.expect(pastry_model)
    @pastry_namespace.marshal_with(pastry_model)
    def post(self):
        """
            Create a new pastry
        """
        data=pastry_namespace.payload

        new_pastry=Pastries(
            name=data['name'],
            price=data['price'],
            description=data['description']
        )
        new_pastry.save_to_db()

        return new_pastry,HTTPStatus.CREATED

@pastry_namespace.route('/pastry/<int:pastry_id>')
class PastryGetUpdate(Resource):

    @pastry_namespace.marshal_with(pastry_model)
    def get(self, pastry_id):
        """
            Get a pastry by id
        """
        pastry=Pastries.get_pastry_by_id(pastry_id)

        return pastry,HTTPStatus.OK

    def put(self, pastry_id):
        """
            Update a pastry by id
        """
        pastry_to_update=Pastries.get_pastry_by_id(pastry_id)

        data=pastry_namespace.payload

        pastry_to_update.name=data['is_available']
        pastry_to_update.price=data['price']
        pastry_to_update.description=data['description']

        db.session.commit()

        return pastry_to_update,HTTPStatus.OK


    @pastry_namespace.marshal_with(pastry_model)
    def delete(self, pastry_id):
        """
            Delete a pastry by id
        """
        pastry_to_delete=Pastries.get_pastry_by_id(pastry_id)

        pastry_to_delete.delete_from_db()

        return pastry_to_delete,HTTPStatus.NO_CONTENT
