import axios from 'axios';

const getUsers = async (state) => {
    try {
        const peticion = await axios.get(`https://recompensas-bits.herokuapp.com/api/users/`);
        state(peticion.data);
    } catch (error) {
        console.log(error);
    }
}

export default getUsers;