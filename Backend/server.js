const express = require('express');

const logger = require('morgan');

const adminusers = require('./routes/tasks');


const bodyParser = require('body-parser');

const mongoose = require('./config/database'); //database configuration

var jwt = require('jsonwebtoken');

const app = express();

app.use(express.static('public')); //public folder as static folder

app.set('secretKey', 'nodeRestApi'); // jwt secret token// connection to mongodb

app.set('secretKey1', 'nodeRestApiAdmin'); // jwt secret token// connection to mongodb

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));

const jsonParser = bodyParser.json();

app.use(jsonParser);

const cors = require('cors');
app.use(cors());

app.get('/', function(req, res){
    res.json({"tutorial" : "Build REST API with node.js"});
});// public route

app.use('/tasks', tasks);// private route

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});



function validateadminUser(req, res, next) {
    if(req._parsedUrl.path == "/products" && req.method == "GET"){
        next();
    }else{
        jwt.verify(req.headers['x-access-token'], req.app.get('secretKey1'), function(err, decoded) {
            if (err) {
            res.json({status:"error", message: err.message, data:null});
            }else{
            // add user id to request
            req.body.userId = decoded.id;
            next();
            }
        });
    }
}// express doesn't consider not found 404 as an error so we need to handle 404 explicitly



function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.json({status:"error", message: err.message, data:null});
        }else{
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });
}// express doesn't consider not found 404 as an error so we need to handle 404 explicitly


// handle 404 error
app.use(function(req, res, next) {
    console.log('res',res)
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});// handle errors


app.use(function(err, req, res, next) {
    console.log(err);
    if(err.status === 404)
        res.status(404).json({message: "Not found"});
    else 
        res.status(500).json({status: "failed", message: "Something looks wrong", error:err});
});

// app.post('/uploadImage', imageUpload.single('image'), (req, res) => {
//      res.send(req.file)
// }, (error, req, res, next) => {
//      res.status(400).send({ error: error.message })
// })
  
app.listen(4000, function(){
    console.log('Node server listening on port 4000');
});