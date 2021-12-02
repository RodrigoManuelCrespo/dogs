const {Temperament} = require('../db')
const getApi = require('./getApi')

async function firstTemperament(){
    const allDogs = await getApi();
    //flat saca los subarray
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
}

module.exports = firstTemperament;