const express = require("express");
const mysql = require("mysql");
const doenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const cookieParser= require("cookie-parser");

const app = express();

doenv.config({
  path: "./.env",
});
const db = mysql.createConnection({
  
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
  
  
});
console.log(db);
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connection Success");
  }
});


app.listen(5000,()=>{
    console.log("Connected Successfully...")
});