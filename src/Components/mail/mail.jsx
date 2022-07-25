import React from "react";
import "./mail.css";

function MailView(){
    return(
        <>
        

            <h2>Responder a correo</h2>
            <div className="form-control">
                    <div className="form-group">
                        <label>Para:</label>
                        <input type="email" placeholder="empleado@email.com"/>
                    </div>
                    <div className="form-group">
                        <label>Asunto:</label>
                        <input type="text" placeholder="Asunto"/>    
                    </div>                    
                    <p>
                        Por este medio se le informa que la peticion de su pedido del producto (producto) ha sido
                        <select name="select" id="">
                            <option value="refuse">Rechazada</option>
                            <option value="acept">Aceptada</option>
                        </select>
                        ¡Que tenga un buen día!
                    </p>   
            </div>


        </>
    )
}
export default MailView;