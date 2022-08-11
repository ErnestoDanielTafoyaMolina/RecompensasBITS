import axios from 'axios';

const getProducts = async (state) => {
    const peticion = await axios.get(`https://backendbits.herokuapp.com/products`);
    state(peticion.data);
}

export default getProducts;