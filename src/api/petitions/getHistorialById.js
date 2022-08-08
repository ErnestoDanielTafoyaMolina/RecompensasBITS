import axios from 'axios';

const getHistorialById = async (Id, state) =>{
    try {
        const peticion = await axios.get(`http://localhost:3001/api/historial/${Id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error);
    }
}

export default getHistorialById;
