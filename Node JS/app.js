
const users = require('./routes/user');
const chats = require('./routes/chats');
//const customEnv = require('custom-env');
const mongoose = require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');
const express = require('express');

//create the Express app
var app= express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.json());



//configure environment variables
//customEnv.env(process.env.NODE_ENV, './config');

//connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/new", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});


// Set up routes
app.use('/api/Users', users);
app.use('/api/Chats', chats);
app.use('/api', users);

//start the server
// app.listen(process.env.PORT);
app.listen(5000);