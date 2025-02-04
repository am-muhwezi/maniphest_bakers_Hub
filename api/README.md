# API Documentation

## Overview
This document provides an overview of the API routes available in the Maniphest Bakers Hub project.

## Routes

### User Routes
| Method | Endpoint       | Description                        |
|--------|----------------|------------------------------------|
| GET    | /users         | Retrieve a list of all users.      |
| POST   | /users         | Create a new user.                 |
| GET    | /users/{id}    | Retrieve a specific user by ID.    |
| PUT    | /users/{id}    | Update a specific user by ID.      |
| DELETE | /users/{id}    | Delete a specific user by ID.      |

### Product Routes
| Method | Endpoint         | Description                          |
|--------|------------------|--------------------------------------|
| GET    | /products        | Retrieve a list of all products.     |
| POST   | /products        | Create a new product.                |
| GET    | /products/{id}   | Retrieve a specific product by ID.   |
| PUT    | /products/{id}   | Update a specific product by ID.     |
| DELETE | /products/{id}   | Delete a specific product by ID.     |

### Order Routes
| Method | Endpoint       | Description                        |
|--------|----------------|------------------------------------|
| GET    | /orders        | Retrieve a list of all orders.     |
| POST   | /orders        | Create a new order.                |
| GET    | /orders/{id}   | Retrieve a specific order by ID.   |
| PUT    | /orders/{id}   | Update a specific order by ID.     |
| DELETE | /orders/{id}   | Delete a specific order by ID.     |

## Authentication
| Method | Endpoint       | Description                        |
|--------|----------------|------------------------------------|
| POST   | /auth/login    | Authenticate a user and return a token. |
| POST   | /auth/register | Register a new user.               |

## Error Handling
All routes return appropriate HTTP status codes and error messages in case of failure.

## Contact
For any questions or issues, please contact the API support team.
