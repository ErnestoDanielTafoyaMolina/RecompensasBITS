import React from "react";
import "./FooterStyle.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Teléfono:</h4>
            <h1 className="list-unstyled">
              <li>449-261-4108</li>
              <li>Aguascalientes, México.</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Links</h4>
            <ui className="list-unstyled">
              <li>Facbook</li>
              <li>Linkedin</li>
              <li>Instagram</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>BITS</h4>
            <ui className="list-unstyled">
              <p>Consolidarnos como una empresa líder en Asesoría y Servicios en Recursos Humanos; siendo un socio estratégico y de alto desempeño de nuestros clientes, tanto en el mercado nacional como en el extranjero.</p>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} BITS | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;