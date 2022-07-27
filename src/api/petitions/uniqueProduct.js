import axios from 'axios';

const getUniqueProduct = async (id,state) => {
    try {
        const peticion = await axios.get(`https://bitsrecompensas-api.azurewebsites.net/api/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}

export default getUniqueProduct;