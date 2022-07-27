import axios from 'axios';

const setAceptedPetitions = async (state) => {
    try{
        const res = await axios.get('http://localhost:3001/api/petition/acepted');
        state(res.data)
    }catch(error){
        console.log(error)
    }
}
export default setAceptedPetitions;