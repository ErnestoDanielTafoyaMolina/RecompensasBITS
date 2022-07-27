import axios from 'axios';

const getHistorial = async (state) =>{
    try {
        const peticion = await axios.get(`https://bitsrecompensas-api.azurewebsites.net/api/historial/`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}

export default getHistorial;