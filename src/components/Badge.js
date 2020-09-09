import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

//Todos los componentes requieren de Render()
class Badge extends React.Component {
  //Render Define cual sera el resultado que aparecera en pantalla
  render() {
    //Para no poner muchos this.props.NOMBRE se dejan las constantes y se  hace lo siguiente:
    //   const{
    //       firstName,
    //       lastName,
    //       jobTitle,
    //       twitter,
    //       avatarUrl
    //   }=this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conferencia" />
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
