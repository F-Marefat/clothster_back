// server.
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
//  const db             = require('./config/db');

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});
	app.listen(port, () => {
	console.log('We are live on ' + port);
});

var url = "";


//Import the mongoose module
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Set up default mongoose connection
var mongoDB = 'mongodb://fateme:fateme123@ds141221.mlab.com:41221/clothster';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console,'MongoDB connection error:'));

// var MyModel = mongoose.model('products', new Schema({ id: Number }));
// MyModel.findOne(function(error, result) { console.log(result);});
// model.findOne(function(error, result) { console.log(result);});


// product.create({id:"1",name:"shoe",sizes:['12','12.5'],colors:['red','blue'],
// isAvailable:"true",price:"100",discount:"10"});

// var product1 = new ProductModel({id:"1",name:"shoe",sizes:['12','12.5'],colors:['red','blue'],
// isAvailable:"true",price:"100",discount:"10"});
// product1.save(function (err) {
// if (err) return handleError(err);
// // saved!
// });
// // model.findOne(function(error, result) { console.log(result);});

