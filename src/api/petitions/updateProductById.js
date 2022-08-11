import axios from 'axios';

const updateProductById = async (id,state) =>{
    try {
        const peticion = await axios.put(`https://backendbits.herokuapp.com/api/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}

export default updateProductById;