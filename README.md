# Budgeting App

This app demonstrates using graphql with the Elixir framework, Phoenix, as the backend and React as the frontend.

## How to run the project locally:
Note: So far this has only been tested on a mac.

### Backend

#### Set up postgres and add dev user

Mac(using homebrew): 
```
Install and start:

    brew install postgresql
    brew services start postgresq

Connect and create user:

    psql postgres
    CREATE USER dev_user WITH CREATEDB PASSWORD 'password';
```
[The credentials for the dev database are set up here](https://github.com/dbrandt7/budgeting_app/blob/master/budgeting_be/config/dev.exs)

#### Run Elixir Service

[Make sure Elixir is installed](https://elixir-lang.org/install.html)

```
Make sure you are in the folder budgeting_be before running these commands.

Set up dev environment:

    mix deps.get
    mix ecto.create
    mix ecto.migrate
    mix run priv/repo/seeds.exs

Start server:

    mix phx.server
```
Open graphiql: http://localhost:4000/graphiql

### Frontend

#### Run React app

[Make sure node is installed](https://nodejs.org/en/)

I decided to use yarn to build the app, but npm may also work: [Install yarn](https://yarnpkg.com/en/)

```
Make sure you are in the folder budgeting_fe before running these commands.

Install dependencies:
    
    yarn install

Run app:

    yarn start
```
Open app: http://localhost:3000
