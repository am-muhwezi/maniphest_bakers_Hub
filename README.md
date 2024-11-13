# Maniphest Bakers Hub

The Maniphest Bakers Hub is a Flask-based web application that allows bakers to manage their bakery operations, including orders, inventory, and customer information.

## Features

- **Order Management**: Users can create, view, update, and track orders placed by customers.
- **Inventory Tracking**: Bakers can monitor their ingredient and product inventory, including low-stock alerts.
- **Customer Database**: The application stores customer information and order history.
- **Reporting**: Bakers can generate reports on sales, inventory, and customer trends.

## Installation

1. **Create a Virtual Environment**:
   ```
   python3 -m venv venv
   source venv/bin/activate
   ```

2. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

3. **Set up the Database**:
   ```
   flask db init
   flask db migrate -m "Initial migration"
   flask db upgrade
   ```

4. **Configure the Environment**:
   - Create a `config.py` file in the project root directory and add the necessary configuration variables, such as the database connection string, secret key, etc.

5. **Run the Application**:
   ```
   flask run
   ```

## Development

1. **Run the Development Server**:
   ```
   flask run --reload
   ```
   This will start the Flask development server and automatically reload the application when changes are detected.

2. **Run Tests**:
   ```
   pytest
   ```
   The project includes a set of unit and integration tests that can be run using the `pytest` command.

3. **Manage Database Migrations**:
   - To create a new migration script, run `flask db migrate -m "Descriptive migration message"`.
   - To apply the latest migration, run `flask db upgrade`.

## Contributing

We welcome contributions to the Maniphest Bakers Hub project. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and ensure that all tests pass.
4. Submit a pull request with a detailed description of your changes.

## License

The Maniphest Bakers Hub is licensed under the [MIT License](LICENSE).
