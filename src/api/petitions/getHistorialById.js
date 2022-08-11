import axios from 'axios';

const getHistorialById = async (Id, state) =>{
    try {
        const peticion = await axios.get(`https://backendbits.herokuapp.com/api/historial/${Id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error);
    }
}

export default getHistorialById;
