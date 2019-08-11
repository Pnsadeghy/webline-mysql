# Webline.js with mysql db

Webline.js is a personal structure for express.js projects.

## Features?

1. MVC structure
2. Mysql connection

## Development

We are still in the development phase of the framework and if you have any questions or comments please let us know

## Migration database

For migrate `npx sequelize-cli db:migrate`

For create new model: Create User model for app_modules users

`npx sequelize-cli model:generate --name User --attributes name:string --models-path app_modules/users/models`

For more info see [Sequelize migrations](https://sequelize.org/master/manual/migrations.html)

## Seed database

For seed data `npx sequelize-cli db:seed:all`

For create new seed `npx sequelize-cli seed:generate --name demo-user`

For more info see [Sequelize seeds](https://sequelize.org/master/manual/migrations.html#running-seeds)