import axios from 'axios';

const Aceptedpetitions = async (id)=>{
    try {
         await axios.put(`https://backendbits.herokuapp.com/petition/acepted/${id}`);
    } catch (error) {
        console.log(error)
    }
}
export default Aceptedpetitions;