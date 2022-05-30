import React from 'react';
import './App.css';
import usuario from './usuario';
import admin from './admin';

function App() {
    return ( 
        <div className = "app" >
            <usuario nombre="Emilio"/>
            <admin/>
            <h1>Root Space</h1>
        </div>
    );   
}


export default App;