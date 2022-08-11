import axios from 'axios';

const getPendientPetitions = async (state) => {
    try{
        const res = await axios.get(`https://recompensas-bits.herokuapp.com/api/petition/complete`);
        state(res.data);
    }catch(error){
        console.log(error)
    }
}
export default getPendientPetitions;