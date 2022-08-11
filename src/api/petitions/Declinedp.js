import axios from 'axios';

const DeclinedPetitions = async (id)=>{
    try {
        await axios.put(`https://recompensas-bits.herokuapp.com/api/petition/declined/${id}`);
    } catch (error) {
        console.log(error)
    }
}
export default DeclinedPetitions;