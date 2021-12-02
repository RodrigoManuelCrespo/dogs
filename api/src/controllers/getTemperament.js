const { Temperament } = require('../db'); 

const temperament = async (req,res)=>{
    
    let temperamentDb = await Temperament.findAll();

    res.send(temperamentDb); 
}

module.exports = temperament;