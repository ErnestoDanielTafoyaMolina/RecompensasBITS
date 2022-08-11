import axios from 'axios';

const getHistorial = async (state) =>{
    try {
        const peticion = await axios.get(`https://backendbits.herokuapp.com/historial/`);
        state(peticion.data);
    } catch (error) {
        console.log(error);
    }
}

export default getHistorial;