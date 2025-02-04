from flask_restx import Resource, Namespace



# Create a namespace for the pastry operations
pastry_namespace = Namespace('pastry', description='Pastry operations')


@pastry_namespace.route('/pastry')
class PastryGetCreate(Resource):
    def get(self):
        """
            Get all pastries
        """
        pass


    def post(self):
        """
            Create a new pastry
        """
        pass

@pastry_namespace.route('/pastry/<int:pastry_id>')
class PastryGetUpdate(Resource):

    def get(self, pastry_id):
        """
            Get a pastry by id
        """
        pass

    def put(self, pastry_id):
        """
            Update a pastry by id
        """
        pass

    def delete(self, pastry_id):
        """
            Delete a pastry by id
        """
        pass