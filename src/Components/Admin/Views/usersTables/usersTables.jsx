import React from "react";



function UsersTables(props){
    const idUser = props.idUser;
    const nameUser = props.nameUser;
    const lastNameUSer = props.lastNameUSer;
    const rolUser = props.rolUser;

    return(
        <>
            <table>
                <tbody>
                    <td>{idUser}</td>
                    <td>{nameUser}</td>
                    <td>{lastNameUSer}</td>
                    <td>{rolUser}</td>
                </tbody>
            </table>
        </>
    )
}

export default UsersTables;  