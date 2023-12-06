require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "root",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.DB_PROD_USERNAME,
        "password": process.env.DB_PROD_PASSWORD,
        "database": process.env.DB_PROD_NAME,
        "host": process.env.DB_PROD_HOST,
        "dialect": "mysql",
        'port': process.env.DB_PROD_PORT
    }
};