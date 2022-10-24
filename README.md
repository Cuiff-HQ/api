## setup

1. Install yarn e.g. with homebrew `brew install yarn`
2. Install postgres e.g. with homebrew `brew install postgresql`
    - Check if postgresql is started `brew services` => `postgresql status` should be `started`
      -> If it is `none` run `brew services start postgresql`, then check again
3. create a new database e.g. `createdb zetted`
4. Install the dependencies `yarn install`
5. Create a .env file `touch .env` and copy the content of .env.example into it. (and fill out missing env variables)
6. Run the project with `yarn dev`
