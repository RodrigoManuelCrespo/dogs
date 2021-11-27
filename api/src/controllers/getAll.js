const getApi = require('./getApi');
const getDb = require('./getDb');

const getAll = async()=>{
    try {
        const api = await getApi();
        const db = await getDb();
        const infoConcat = [...api, ...db];
        return(infoConcat);   

    } catch (error) {
        console.log(error);
    }   
}

module.exports = getAll