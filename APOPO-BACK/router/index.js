const express = require('express');
const router = express.Router();

const config = require('../config.js');
const sql = require('mysql');

// add middleware to parse out post request data
router.use(express.json());
router.use(express.urlencoded({ 'extended' : false }));
// middleware will let the app encode path like localhost:300/users/getone { "user" : "Puppy", "pass" : "test"}
// test it in postman!

// create db connection. user credentials are stored in config.js
let pool = sql.createPool({
    // let 20 people connect at the same time
    conectionLimit: 20,
    host : config.host,
    user : config.user,
    password : config.password,
    database : config.database,
    port : 3306 // mac:8889, windows: 3306
})





module.exports = router;