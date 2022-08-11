import axios from 'axios';

const deleteProductById = async (id, state)=>{
    try {
        const peticion = await axios.delete(`https://backendbits.herokuapp.com/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}
export default deleteProductById;