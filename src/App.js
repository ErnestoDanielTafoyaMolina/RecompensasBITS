import React, { useEffect, useState } from 'react';

import './App.css';

import User from './Components/User/user';
import Admin from './Components/Admin/admin';

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