import React from "react";
import confLogo from "../images/badge-header.svg";

//Todos los componentes requieren de Render()
class Badge extends React.Component {
  //Render Define cual sera el resultado que aparecera en pantalla
  render() {
    //El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola.
    //Si se importa deben usarse llaves para que sea evaluado.
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la Conferencia" />
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Lenika
            <br />
            Guerrero
          </h1>
        </div>
        <div>
          <p>Ing. Sistemas Computacionales</p>
          <p>LenikaGuerrero</p>
        </div>
        <div>#platziConf</div>
      </div>
    );
  }
}

export default Badge;
