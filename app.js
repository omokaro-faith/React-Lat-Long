const express = require('express');
const path  = require('path');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./server/routes/auth-routes');
const profileRoutes = require('./server/routes/profile-routes');
require('dotenv').config();
require('./server/config/passport-setup');

const port =  3000;
const app = express();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler),
);
app.use(webpackHotMiddleware(compiler));


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}, () => {
  console.log(`connected to mongoDB`);
});

const publicPath = path.join(__dirname, 'client', 'public');

app.get('*', (req, res) => {
  console.log('I got here');
  res.sendFile(path.join(publicPath, 'index.html'));
});

//setup routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.set('port', port);
app.listen(port, () => {
  console.log(`Listening for requests on ${port}`);
});