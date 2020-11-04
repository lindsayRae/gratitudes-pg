const express = require('express');

const cors = require('cors');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 5000;

const path = require('path');
const routes = require('./routes');
const passport = require('./auth');

app.use(express.json());
app.use(cors());

app.use(session({
  secret: process.env.SESSION_SECRET || 'the secret',
  resave: true,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' },

}));
app.use(passport.initialize());
app.use(passport.session());

// const isUserLoggedIn = (req, res, next) => {
//   if (req.user) {
//     return next();
//   }

//   return res.status(403).send({ message: 'You are not authorized' });
// };

// // just a postman test
// app.get('/second', isUserLoggedIn, (req, res) => {
//   res.send('<h1>Here and /second</h1>');
// });

// Alex, how can I use isUserLogginIn on my routes, except the login?
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  // Serve the static files from the React app
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handles any requests that don't match the ones above
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
