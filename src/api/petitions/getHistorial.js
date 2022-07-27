import axios from 'axios';

const getHistorial = async (state) =>{
    try {
        const peticion = await axios.get(`http://localhost:3001/api/historial/`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}

export default getHistorial;