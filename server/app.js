const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path')

app.use("/static", express.static(__dirname + "/public"))

