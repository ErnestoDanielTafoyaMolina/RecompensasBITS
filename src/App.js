//React dependenses
import React from 'react';
// import { useParams } from 'react-router-dom';
//estilos
import './App.css';

// Rutas relativas propias
import User from './Components/User/user';
import Admin from './Components/Admin/admin';
// import { getUniqueUser} from './api/petitions_index';


function App() {
    const rolUser="Administrador";//Cambiar aqui para el tipo de rol
    //hooks
    // const params=useParams();
    // useEffect(()=>{
    //     getUniqueUser(params.Rol)
    // },[])
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