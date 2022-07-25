import axios from 'axios';

const getPendientPetitions = async (state) => {
    try{
        const res = await axios.get('http://localhost:3001/api/petition/pendient');
        state(res.data)
    }catch(error){
        console.log(error)
    }
}
export default getPendientPetitions;