const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const viewRoute = require("./Controller/viewController");
const apiRoute = require("./Controller/apiController");


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json()); 
app.use(cors({ origin: '*' }));

app.use('/api', apiRoute);
app.use('', viewRoute);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
