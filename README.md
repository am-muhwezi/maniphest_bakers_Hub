# Maniphest Bakers Hub

## Overview
Maniphest Bakers Hub is a web platform built with Flask that connects home bakers with customers looking for delicious homemade pastries. Bakers can list their products, manage orders, and deliver baked goods to customers, while customers can browse, order, and review items from local home bakers.

## Features
- **User Authentication**: Signup and login for bakers and customers.
- **Product Listings**: Bakers can add, edit, and manage their baked goods.
- **Order Management**: Customers can place orders and track their status.
- **Delivery Tracking**: System for managing order deliveries.
- **Reviews & Ratings**: Customers can leave feedback for bakers.
- **Admin Dashboard**: Admin panel to oversee platform activity.

## Technologies Used
- **Backend**: Flask (Python)
- **Frontend**: React
- **Database**: SQLite / PostgreSQL
- **Authentication**: JWT
- **Deployment**: Gunicorn, Docker (optional), AWS/Heroku

## Installation & Setup
### Prerequisites
Ensure you have Python 3.8+ installed.


### Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Setup Environment Variables
Create a `.env` file and configure necessary variables like:
```
SECRET_KEY=your_secret_key
DATABASE_URL=sqlite:///site.db  # Use PostgreSQL for production
```

### Run Migrations
```bash
flask db upgrade
```

### Start the Application
```bash
flask run
```
Access the app at `http://127.0.0.1:5000/`

## Deployment
- Configure a production database (e.g., PostgreSQL)
- Use a WSGI server like Gunicorn
- Deploy on platforms like Heroku, AWS, or DigitalOcean

## Contribution Guidelines
1. Fork the repository.
2. Create a new feature branch.
3. Commit and push your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For inquiries, reach out at `intricatesyllable@gmail.com` or open an issue on GitHub.
