"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express,Request,Response modules
const express_1 = __importDefault(require("express"));
//creating app
const app = (0, express_1.default)();
//setting port where will be our server(application)
const port = 3001;
app.get('/', (req, res) => {
    let message = 'Hello INCUBATOR.com!';
    res.send(message);
});
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
