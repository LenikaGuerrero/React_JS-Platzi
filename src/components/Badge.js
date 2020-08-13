import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

//Todos los componentes requieren de Render()
class Badge extends React.Component {
  //Render Define cual sera el resultado que aparecera en pantalla
  render() {
    //Para los atributos de clases no se utiliza class sino className
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            Lenika
            <br />
            Guerrero
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Ing. Sistemas Computacionales</h3>
          <div>LenikaGuerrero</div>
        </div>
        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
