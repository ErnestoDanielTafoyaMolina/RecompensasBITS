//React dependenses
import React,{ useEffect, useState } from 'react';
//estilos
import './App.css';

// Rutas relativas propias
import User from './Components/User/user';
import Admin from './Components/Admin/admin';
import { getUniqueUser} from './api/petitions_index';


function App() {

    //variables
    const idUsuario=1;

    //hooks
    const [usuario,setUsuario] = useState(null);
    useEffect(()=>{
        getUniqueUser( idUsuario, setUsuario );
    }, [])

    if(usuario!=null){
        if(usuario.Rol==="Administrador"){
            return(
                <>
                <Admin />
                </>
            )
        }else if(usuario.Rol==="Usuario"){
            return(
                <>
                <User />
                </>
            )
        }else{
            return(
                <>
                    <h2>No te has loggeado</h2>
                </>
            )
        }
    }else{
        return(
            <>
                <h1>No hay usuarios</h1>
            </>
        )
    }
}


export default App;