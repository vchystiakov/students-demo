"use strict";
// import express module
const express = require('express');
//creating app
const app = express();
//setting port where will be our server(application)
const port = 3000;
app.get('/', (req, res) => {
    let message = 'Hello INCUBATOR';
    res.send(message);
});
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
