import axios from 'axios';
export const GET_DOGS = 'GET_DOGS'

export function getBreeds(){
    return async function(dispatch){
        try {
            var dogs = await axios('http://localhost:3001/api/dogs');

            return dispatch({
                type: GET_DOGS,
                payload: dogs.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}