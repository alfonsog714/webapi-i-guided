// import express from 'express' ES2015 Modules
const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello world!");
});

const port = 5000;
server.listen(port, () => console.log(`\n*** running on port ${port} ***\n`));

// install express: npm i express
// add index.js file to the root folder
// to run it: type npm run server
// to test it: go to http://localhost:5000 using a client

// Cannot GET /

// GET is an HTTP method
