# Tech Stack
- Nodejs (v16.x)
- Reactjs(v17.0.2)
- Express(v4.x)
- Sqlite(3.x)

## Steps to run locally
1. `npm install`
2. `npm run seed`
3. `npm run start:dev`

## Steps to run build version
1. `npm install`
2. `npm run seed`
3. `npm start`

## Commands
### `npm run start:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
It starts server on 3001

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run start`

Creates a build version react app and serves it on node server at 3001

### `npm run heroku-postbuild`
To install seed data correctly for sqlite.

## Deployment link

Used heroku with simple config. [Link](https://brawler-app.herokuapp.com/home)

## Enhancements:
- [ ] Adding loaders
- [ ] Adding toasters
- [ ] Error boundaries
- [ ] Integration tests

