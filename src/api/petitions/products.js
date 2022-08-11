import axios from 'axios';

const getProducts = async (state) => {
    const peticion = await axios.get(`https://backendbits.herokuapp.com/api/products`);
    state(peticion.data);
}

export default getProducts;