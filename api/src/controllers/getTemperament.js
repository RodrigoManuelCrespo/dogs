const getAll = require('./getAll');
const { Temperament } = require('../db')

const temperament = async (req,res)=>{
    const allDogs = await getAll();
    //flat saca los subarray¡
    const allTemperaments = allDogs.map(e => e.temperament).flat();
    
    //trim quita los espacios / sort ordena de  manera ascedente abc por defecto
    const newTemperaments = allTemperaments.map(e => e.trim()).sort();

    let array = []

    for(let i=0;i<newTemperaments.length;i++){
        if(!array.includes(newTemperaments[i])){
            array.push(newTemperaments[i])
        }
    }
    
    array.forEach(async (temp) => {
        await Temperament.findOrCreate({
            where: { 
                name: temp
            },
        })
    })
    
    let temperamentDb = await Temperament.findAll();

    res.send(temperamentDb); 
}

module.exports = temperament;