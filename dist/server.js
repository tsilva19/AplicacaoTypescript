"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = express_1.default();
// app.get("/", (req, res) =>{
//     return res.json({message: "Hello World"})
// })
app.get("/", routes_1.createCourse);
app.listen(3333);
