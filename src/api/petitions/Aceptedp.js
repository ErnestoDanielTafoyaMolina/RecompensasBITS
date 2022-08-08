import axios from 'axios';

const Aceptedpetitions = async (id, state)=>{
    try {
        const peticion = await axios.put(`http://localhost:3001/api/petition/acepted/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}
export default Aceptedpetitions;