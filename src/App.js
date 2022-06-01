import React from 'react';

import './App.css';



import User from './Components/User/user';
import Admin from './Components/Admin/admin';

function App(props) {

    if(props.name==="admin"){
        return ( <>
            
            <Admin />
            </>
        );  
    }else if(props.name==="usuario"){
        return ( <>
            
            <User />
        </>);
    }
    return ( <>
    
    
    </>)

}


export default App;