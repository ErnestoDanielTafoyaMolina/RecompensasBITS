import axios from 'axios';

const getUniqueUser = async (id,state)=>{
    try{
        const peticion = await axios.get(`https://backendbits.herokuapp.com/api/users/${id}`);
        state(peticion.data);
        
    }catch(error){
        console.log(error)
    }
}

export default getUniqueUser;
