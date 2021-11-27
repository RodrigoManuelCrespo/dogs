const getAll = require('./getAll');

const getDogs = async(req,res)=>{
    try {
        const {name} = req.query;
        const allBreeds = await getAll();
        
        if(name){
            const breedName = allBreeds.filter(e => {
                return e.name.toLowerCase().includes(name.toLowerCase())
            })
            if(breedName.length > 0){
                res.send(breedName);
            } else {
                res.status(404).send('Breed not found');
            }
        } else {
            res.send(allBreeds);
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = getDogs;
