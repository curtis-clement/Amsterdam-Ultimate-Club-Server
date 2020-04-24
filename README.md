## What This App Is

This app is a resdesign (still in progress) of the website for Amsterdam Ultimat Club. The following instructions will help you through installing the database portion of the app. For the full Readme please follow this link to the Front End and view the Readme there.

https://github.com/curtis-clement/Amsterdam-Ultimate-Club-Client

## SETUP - How To Intall

1. Clone the app
2. cd into your project
3. install dependencies
```
npm install
```
4. Configure your database in `config/config.json`

The default assumes a postgres database with
- username: postgres
- password: secret
```json
// config/config.json
{
  "development": {
    "username": "postgres",
    "password": "secret",
    "database": "YOUR_PROJECT_NAME_HERE_development",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": "0"
  }
}
```
5. Create database, run migrations & seed data

`package.json` contains a script for this

```bash
npm run initdev
```

Or run the commands seperately

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

6. start server with `nodemon` (recommended for development)

```
npm run dev
```

7. or start normally

```
npm start
```
