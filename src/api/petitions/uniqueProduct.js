import axios from 'axios';

const getUniqueProduct = async (id,state) => {
    try {
        const peticion = await axios.get(`https://backendbits.herokuapp.com/api/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}

export default getUniqueProduct;