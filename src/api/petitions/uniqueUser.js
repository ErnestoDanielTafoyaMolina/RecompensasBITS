import axios from 'axios';

const getUniqueUser = async (id,state)=>{
    try{
        const peticion = await axios.get(`https://backendbits.herokuapp.com/users/${id}`);
        state(peticion.data);
        
    }catch(error){
        console.log(error)
    }
}

export default getUniqueUser;
