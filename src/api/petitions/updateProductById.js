import axios from 'axios';

const updateProductById = async (id,state) =>{
    try {
        const peticion = await axios.put(`http://localhost:3001/api/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}

export default updateProductById;