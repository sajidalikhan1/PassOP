const express = require('express')

// if you add these 2 lines form web means we can make .env file
const dotenv = require('dotenv')

// console.log(process.env) // remove this after you've confirmed it is working
// by keeping these we get all evironemnt of that machine


// we are getting that machine env
// console.log(process.env.MONGO_URI) // by keeping mongo uri we get that enviroment
// yeah we get
// in future we configure any by keeping just process.env



// for database
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// inmporting body-parser
const bodyparser = require('body-parser')

const cors = require('cors')


// these one dot env upper line
dotenv.config() //for good understanad we keeping these from 1 to 2 lines

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop'; //for database which we want to create

const app = express()
const port = 3000

app.use(bodyparser.json()) //we are using
app.use(cors()) //above we imported 

client.connect(); //used for connecting clinet

// Getting all passwords
app.get('/', async (req, res) => { //making to async func
    const db = client.db(dbName); // declaring db
    // const collection = db.collection('documents');// making collections
    const collection = db.collection('passwords');

    // for fetching
    const findResult = await collection.find({}).toArray();
//   res.send('Hello World!')
  res.json(findResult); //used for finding or fethcing data
})

// Save a passwords
app.post('/', async (req, res) => { //making to async func
    const password = req.body //we are requesting body
    const db = client.db(dbName);
    // const collection = db.collection('documents');
    const collection = db.collection('passwords');
    // const findResult = await collection.find({}).toArray(); // for fetching
                                                            // instead of saying find, we are insterting
    
    // insertinng one db
    const findResult = await collection.insertOne(password)

    // res.send(req.body) //sending request to body
    res.send({success : true, result : findResult}) //cheking it working or not
})

// Delete a password by id
app.delete('/', async (req, res) => { //making to async func
    const password = req.body //we are requesting body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password) //keeping delete one used to delete
    res.send({success : true, result : findResult}) //cheking it working or not
})

app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
  console.log(`Example app listening on port http://localhost:${port}`)
}) 

// for version 18, we no need to use nodemon
// we can use node --watch server.js -->it acts as nodemon, yeah it is like same
// .env file is used for database connecting
// .env file is used make that environment which we need by keeping url
// by keeping url in .env file, for ex if we host any machine that machine enviroment we get.
// this .env file that simulate with that environment which we need.


// now we are using get api to get all passwords and we can also use mongoose as we wish
// These is a fairly complexity project so we are not using mongoose

// for using these we are importing copy from web
// first we need to import -> clinet(url) ->database name

// below we for fetching we need to that above which given in await
//  we need to connect with client as above
// after connect, we need to make db and collection


// in save password
// we are sending req , for that req we need to install
// npm i body-parser
// after installing we need to import
// next below port number , we are using body parser

// for testing api, we are using postman

// we are installing cors for fectching