import axios from 'axios';

const updateBits = async (idUsuario,idProducto,bitsProducto, state)=>{
    try {
        const peticion = await axios({
            method: 'put',
            url:'https://backendbits.herokuapp.com/petition/restar',
            data:{
                idUsuario:`${idUsuario}`,
                idProducto:`${idProducto}`,
                bitsProducto:`${bitsProducto}`
            }
        });
        state(peticion.data);
    } catch (error) {
        console.log(error);
    }
}

export default updateBits;