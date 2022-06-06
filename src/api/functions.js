import axios from 'axios';

const getUsers = async (state) => {
    const peticion = await axios.get("http://localhost:4000/users/");
    state(peticion.data);
}

export default getUsers;