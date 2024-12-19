const mongoose =  require('mongoose');
const id = 1;
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png"
const PokeIndexSchema = new mongoose.Schema({
    url: String,
    number: Number
})

Pokeindex = mongoose.model("Pokeindex", PokeIndexSchema);
module.exports = Pokeindex