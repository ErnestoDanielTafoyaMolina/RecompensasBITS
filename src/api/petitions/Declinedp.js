import axios from 'axios';

const DeclinedPetitions = async (id)=>{
    try {
        await axios.put(`https://backendbits.herokuapp.com/api/petition/declined/${id}`);
    } catch (error) {
        console.log(error)
    }
}
export default DeclinedPetitions;