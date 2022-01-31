const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();

// 
app.use(cors());

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Exchange Rate');
});
// import currency routes
const currencyRoutes = require('./src/routes/currency.route');

// create currency routes
app.use('/api/v1/currency', currencyRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port http://localhost:${port}`);
});