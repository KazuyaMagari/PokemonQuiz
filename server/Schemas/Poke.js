const mongoose = require('mongoose');
const Poke = require('./PokeAPI');
const PokeIndex = require('./PokeIndex')


mongoose.connect("mongodb://127.0.0.1:27017/Pokes",  {useNewUrlParser: true,
    useUnifiedTopology: true}).then(() => {
    console.log('opened')
}).catch((err)=>{
    console.log(err)
})


const Pokes = async() =>{
    try {
    for (let i = 1; i < 101; i++){
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
     const Data = await response.json();

     const Datas = {
        value: Data.id,
        name: Data.name
     };

     const poke = new Poke(Datas); 
     await poke.save()
     console.log('data is successfuly saved', Datas);
    }
    }catch(err){
        console.log(err)
    }
}

Pokes();