import axios from 'axios';

const Aceptedpetitions = async (id)=>{
    try {
         await axios.put(`https://recompensas-bits.herokuapp.com/api/petition/acepted/${id}`);
    } catch (error) {
        console.log(error)
    }
}
export default Aceptedpetitions;