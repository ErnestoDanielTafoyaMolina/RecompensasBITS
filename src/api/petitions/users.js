import axios from 'axios';

const getUsers = async (state) => {
    try {
        const peticion = await axios.get("http://localhost:3001/api/users/");
        state(peticion.data);
    } catch (error) {
        console.log(error);
    }
}

export default getUsers;