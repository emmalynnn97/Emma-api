const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import the various types of routes
const projectsRoute = require('./routes/projects')
const pagesRoute = require('./routes/pages')
const menusRoute = require('./routes/menus');

//Enable up cross origin resource sharing, enable the body parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set the port for the server to listen on
const port = process.env.PORT || 5000;

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    {useUnifiedTopology:true,useNewUrlParser:true} ,
    ()=>{
    console.log('Connected to DB');
});

//Middleware to enable the various types of routes
app.use('/pages',pagesRoute);
app.use('/projects',projectsRoute);
app.use('/menus',menusRoute);

//The Root route
app.get('/', (req, res) => [
    res.status(200).send('API Root Route, try using /projects, /pages, or /menus to get started')
]);

//Start the server, listen on port specified in the port const
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});