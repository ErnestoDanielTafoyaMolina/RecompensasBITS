import axios from 'axios';

const DeclinedPetitions = async (id, state)=>{
    try {
        const peticion = await axios.put(`http://localhost:3001/api/petition/declined/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}
export default DeclinedPetitions;