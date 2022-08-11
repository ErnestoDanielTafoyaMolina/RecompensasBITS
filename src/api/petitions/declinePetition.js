import axios from 'axios';

const declinePetitionById = async (id, state)=>{
    try {
        const peticion = await axios.put(`https://backendbits.herokuapp.com/api//petition/declined/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error) }
}
export default declinePetitionById;