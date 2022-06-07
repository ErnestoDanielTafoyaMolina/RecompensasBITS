import React, { useEffect, useState } from 'react';

import './App.css';

import User from './Components/User/user';
import Admin from './Components/Admin/admin';

import TarjetasUsuario from './Components/Admin/Views/usersTables/usersTables'

import getUsers from './api/functions';

function App() {
    const rolUser="Administrador";
    const [users, setUsers] = useState(null);
    useEffect(() => {
        getUsers(setUsers);
    },[]);

    console.log(users)

    if(rolUser==="Administrador"){
        return ( <>
            
            <Admin />
               
                {
                    users != null ? (
                        users.map( user  => (
                            <div className="cardsu">
                                <div key={user.Id_usuario}>
                                    <TarjetasUsuario 
                                    idUsusario={user.Id_usuario}
                                    nombreUsuario={user.Nombre}
                                    apellidoUsuario={user.Apellido}
                                    rolUsuario={user.Rol}
                                />
                                </div>
                            </div>
                        ))
                    ):('No hay usuarios disponibles')
                }
                
            </>
        );  
    }else if(rolUser==="Usuario"){
        return ( <>
            
            <User />
            
        </>);
    }
    return ( <>
    
    
    </>)

}


export default App;