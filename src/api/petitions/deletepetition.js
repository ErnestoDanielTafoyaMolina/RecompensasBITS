import axios from 'axios';

const setDeclinedPetitions = async (id,state) => {
    try{
        const res = await axios.get(`http://localhost:3001/api/petition/declined/${id}`);
        state(res.data)
    }catch(error){
        console.log(error)
    }
}
export default setDeclinedPetitions;