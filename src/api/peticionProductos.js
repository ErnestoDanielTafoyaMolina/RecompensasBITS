import axios from 'axios';

const getProducts = async (state) => {
        const peticion = await axios.get("http://localhost:3001/api/products/")
        state(peticion.data)
} 
export default getProducts;