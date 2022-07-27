import axios from 'axios';

const deleteProductById = async (id, state)=>{
    try {
        const peticion = await axios.delete(`http://localhost:3001/api/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}
export default deleteProductById;