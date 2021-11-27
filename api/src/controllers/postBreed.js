const {Temperament, Breed} = require('../db');

const postBreed = async (req,res)=>{
    const { 
        name, 
        maxHeight, 
        minHeight, 
        maxWidth, 
        minWidth, 
        life_span, 
        createInDb, 
        temperaments, 
    } = req.body; 

    console.log(temperaments)

    let width = `${minWidth} - ${maxWidth}`
    let height = `${minHeight} - ${maxHeight}` 

    const createBreed = await Breed.create({
        name, 
        height, 
        width, 
        life_span, 
        createInDb,
        temperaments,
    })

    let temperamentDb = await Temperament.findAll({
        where: {
            name: temperaments,
        }
    })

    console.log(temperamentDb)

    createBreed.addTemperaments(temperamentDb)

    res.send('Succesfull creation!')
}

module.exports = postBreed;