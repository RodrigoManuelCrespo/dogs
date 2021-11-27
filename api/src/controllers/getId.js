const getAll = require('./getAll')

const byId = async (req,res) => {
    try {
    const {id} = req.params;
    
    const getDogs = await getAll();
    
    const getDogId = getDogs.find(e => e.id === parseInt(id))

    res.send(getDogId);

    } catch(error){
        console.log(error);
    }
} 

module.exports = byId;