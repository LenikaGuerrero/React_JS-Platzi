import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

//Todos los componentes requieren de Render()
class Badge extends React.Component {
  //Render Define cual sera el resultado que aparecera en pantalla
  render() {
    //Para no poner muchos this.props.NOMBRE se dejan las constantes y se  hace lo siguiente:
    //   const{
    //       firtsName,
    //       lastName,
    //       jobTitle,
    //       facebook,
    //       avatarUrl
    //   }=this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firtsName}
            <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.facebook}</div>
        </div>
        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
