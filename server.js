const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const projectsRoute = require('./routes/projects')
const pagesRoute = require('./routes/pages')


//Set up cross origin resource sharing, enable the body parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//The port for the server to listen on
const port = process.env.PORT || 5000;
//connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology:true,useNewUrlParser:true} ,()=>{
    console.log('Connected to DB');
});



app.use('/pages',pagesRoute);
app.use('/projects',projectsRoute);
//The Root route
app.get('/', (req, res) => [
    res.status(200).send('API Root')
]);


//Start the server, listen on port specified in the port const
app.listen(port, () => {
    console.log(`API is listening on port ${port}`)
});

