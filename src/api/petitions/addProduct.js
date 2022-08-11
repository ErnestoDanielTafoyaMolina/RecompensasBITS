import axios from 'axios'
const addProduct = async (name,price,image,desc,stock,state)=>{
    try {
        const peticion = await axios({
            method:'post',
            url:'https://recompensas-bits.herokuapp.com/api/users',
            data:{
                name:`${name}`,
                price:`${price}`,
                desc:`${desc}`,
                stock:`${stock}`,
                image:`${image}`
            }
        });
        state(peticion.data);
    } catch (error) {
        console.log(error)
    }
}
export default addProduct;