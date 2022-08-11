import axios from 'axios';

const getUniqueProduct = async (id,state) => {
    try {
        const peticion = await axios.get(`https://recompensas-bits.herokuapp.com/api/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}

export default getUniqueProduct;