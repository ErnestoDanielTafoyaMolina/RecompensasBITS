import axios from 'axios';

const getProducts = async (state) => {
    const peticion = await axios.get(`https://bitsrecompensas-api.azurewebsites.net/api/products`);
    state(peticion.data);
}

export default getProducts;