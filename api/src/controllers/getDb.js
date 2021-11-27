const {Breed, Temperament} = require('../db');

const getDb = async()=>{
    try {
        return await Breed.findAll({
            include:{
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes:[],
                }
            }
        })    
    } catch (error) {
        console.log(error)
    }
}

module.exports = getDb;