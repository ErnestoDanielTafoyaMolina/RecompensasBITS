import axios from 'axios';

const getUniqueProduct = async (id,state) => {
    try {
        const peticion = await axios.get(`http://localhost:3001/api/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}

export default getUniqueProduct;