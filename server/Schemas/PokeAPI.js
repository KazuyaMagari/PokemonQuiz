const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  name: { type: String, required: true }
});

// モデルを作成
const Poke = mongoose.model('Poke', pokeSchema);

module.exports = Poke; // モデルをエクスポート
