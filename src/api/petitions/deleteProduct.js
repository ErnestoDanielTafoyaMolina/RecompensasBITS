import axios from 'axios';

const deleteProductById = async (id, state)=>{
    try {
        const peticion = await axios.delete(`https://recompensas-bits.herokuapp.com/api/products/${id}`);
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}
export default deleteProductById;