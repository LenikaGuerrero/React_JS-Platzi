import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Api from "../api";
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid BadgeNew__hero-image"
            src={header}
            alt="Logo"
          />
        </div>{" "}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                //Condicionar si un valor no existe que tome otro
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "TWITTER"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://s.gravatar.com/avatar/12cc36990225cd2fcb6691034703adbc?s=80"
              />
            </div>{" "}
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default BadgeNew;
