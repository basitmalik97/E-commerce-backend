# E-Commerce Back End

## Description

This project involves building the back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database. The goal is to create a functional application with the latest technologies that can compete with other e-commerce platforms.

## Features

- **Database Connectivity:** Uses Sequelize to connect to a MySQL database.
- **Data Handling:** Supports schema and seed commands to create and seed the development database.
- **API Functionality:** Provides API routes for CRUD operations (GET, POST, PUT, DELETE) for categories, products, and tags.
- **Association:** Implements associations between models (Category, Product, Tag, ProductTag) to represent the relationships.
- **Walkthrough Video:** Includes a walkthrough video demonstrating the application's functionality.

## Walkthrough Video

[Watch the Walkthrough Video](#) (https://drive.google.com/file/d/1jBKEGWQj50MlDAi8pekpBwtWBqF5Bg5f/view)

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file and add your MySQL credentials.
4. Run `npm run seed` to seed the database.
5. Start the application using `npm start`.

## Database Models

### Category

- `id`: Integer, primary key, auto increment.
- `category_name`: String, does not allow null values.

### Product

- `id`: Integer, primary key, auto increment.
- `product_name`: String, does not allow null values.
- `price`: Decimal, does not allow null values, validates as decimal.
- `stock`: Integer, does not allow null values, default value of `10`, validates as numeric.
- `category_id`: Integer, references `Category` model's `id`.

### Tag

- `id`: Integer, primary key, auto increment.
- `tag_name`: String.

### ProductTag

- `id`: Integer, primary key, auto increment.
- `product_id`: Integer, references `Product` model's `id`.
- `tag_id`: Integer, references `Tag` model's `id`.

## API Routes

- `/api/categories`: CRUD operations for categories.
- `/api/products`: CRUD operations for products.
- `/api/tags`: CRUD operations for tags.

## Deployment

- [GitHub Repository](#) (https://github.com/basitmalik97/E-commerce-backend)

## Technologies Used

- Express.js
- Sequelize
- MySQL2
- Dotenv

## Credits

- edX Boot Camps LLC

## License

This project is licensed under the [MIT License](LICENSE).
