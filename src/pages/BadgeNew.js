import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      facebook: "",
    },
  };

  //Cambio de BadgeForm a toda la pagina
  //Al Cambiar
  handleChange = (e) => {
    // const nextForm = this.state.form; //Siguiente Estado del Formulario (copia el estado)
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      //Sobreescribe la informacion
      form: {
        ...this.state.form, //Deja los valores que tenia el formulario
        [e.target.name]: e.target.value, //Sobreescribe y Guarda la informacion del Estado
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                facebook={this.state.form.facebook}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/12cc36990225cd2fcb6691034703adbc?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
