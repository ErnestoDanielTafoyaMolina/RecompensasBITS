// eslint-disable-next-line
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
                <Admin 
                id={idUsuario}
                />
                </>
            )
        }else if(usuario.Rol==="Usuario"){
            return(
                <>
                <User
                id={idUsuario}
                />
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
                <div className='error'>
                    <div className='container'>
                        <div className='header'>
                            <h1>Servidor caido o no iniciado</h1>
                        </div>
                        <div className='body'>
                            <p>Algo ha ido mal, contacta con el administrador para reiniciar el servidor</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default App;