const axios = require('axios')
require('dotenv').config();

const { API_KEY, URL_BASE } = process.env;

const getApi = async()=>{
    const apiGet = await axios.get(URL_BASE,{
        headers:{'x-api-key': API_KEY}
    });
   
    const apiData = await apiGet.data.map(e => {
        let arrayTemperament = [];

        if(e.temperament){
            arrayTemperament = e.temperament.split(',');
        }

        return {
            id: e.id,
            name: e.name,
            image: e.image.url,
            temperament: arrayTemperament,
            weight: e.weight.metric,
            height: e.height.metric,
            life_span: e.life_span
        }
    })
    return(apiData);
}

module.exports = getApi;
