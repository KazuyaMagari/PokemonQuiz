const mongoose = require('mongoose');
const PokeIndex = require("./PokeIndex");

mongoose.connect("mongodb://127.0.0.1:27017/Pokes",  {useNewUrlParser: true,
    useUnifiedTopology: true}).then(() => {
    console.log('opened')
}).catch((err)=>{
    console.log(err)
})


const Pokesindex = async() =>{
    try {
    for (let i = 1; i < 101; i++){
        const Datas = {
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
        number: i
     };

     const poke = new PokeIndex(Datas); 
     await poke.save()
     console.log('data is successfuly saved', Datas);
    }
    }catch(err){
        console.log(err)
    }
}

Pokesindex();