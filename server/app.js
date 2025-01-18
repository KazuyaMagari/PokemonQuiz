const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Poke = require("../server/Schemas/PokeAPI");
const cors = require('cors');
const corsOptions = {origin: ["http://localhost:5173"]};
mongoose
  .connect('mongodb://localhost:27017/Pokes', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(cors(corsOptions));
app.use("/static", express.static(__dirname + "/public"))


app.get("/", async (req, res)=> {
    const Pokes = await Poke.find();
    res.json(Pokes)
})

app.listen(3000);