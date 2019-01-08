[![Build Status](https://travis-ci.org/omokaro-faith/React-Lat-Long.svg?)](https://travis-ci.org/omokaro-faith/React-Lat-Long.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/omokaro-faith/React-Lat-Long/badge.svg?branch=master)](https://coveralls.io/github/omokaro-faith/React-Lat-Long?branch=master)

# React-Lat-Long
This is a React Application that displays random information of users on Google Map.

#### Features
- A user can Log in using Google OAuth.
- A user can view random details of users on Google Map (Data used is from gotten https://jsonplaceholder.typicode.com/users).

***
#### Technology
This application was developed purely using Javascript and React/Redux.

#### Dependencies
- [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [React-dom](https://www.npmjs.com/package/react-dom)


***
#### Getting Started
- Clone the project from repository [https://github.com/omokaro-faith/React-Lat-Long](https://github.com/omokaro-faith/React-Lat-Long)
- In your terminal, change directory to the cloned folder and run `yarn install`. This installs all the app's dependencies.
- Create a `.env` file using the sample specified in [.env.sample](.env.sample).
- Get required credentials as seen on .env.sample from [Google console](https://developers.google.com/maps/documentation/javascript/get-api-key)  and [Firebase](https://firebase.google.com/).
- To start the app run `yarn server`.
- Run `yarn test` to run test.
- To view coverage gotten from coveralls run `yarn coveralls`.






