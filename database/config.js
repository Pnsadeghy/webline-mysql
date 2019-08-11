const host = process.env.DB_HOST;
const config = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dialect = 'mysql';
module.exports = {
  "development": {
      "username": username,
      "password": password,
      "database": config,
      "host": host,
      "dialect": dialect
  },
  "test": {
    "username": username,
    "password": password,
    "database": config,
    "host": host,
    "dialect": dialect
  },
  "production": {
    "username": username,
    "password": password,
    "database": config,
    "host": host,
    "dialect": dialect
  }
};