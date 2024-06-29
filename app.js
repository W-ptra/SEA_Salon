const viewRoute = require("./Controller/viewController");
const apiRoute = require("./Controller/apiController");
const sanitize = require("./middleware/sanitize");
const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json()); 
app.use(cors({ origin: '*' }));
app.use(cookieParser());

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(sanitize);

app.use('/api', apiRoute);
app.use('', viewRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});