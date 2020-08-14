import React from "react";

//setState = Escribe Estado
//State = Lee estado

class BadgeForm extends React.Component {
  //Inicializar el Estado
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    facebook: "",
  };

  //Al Cambiar
  handleChange = (e) => {
    this.setState({
      //Guarda la informacion del Estado
      [e.target.name]: e.target.value,
    });
  };

  // Al hacer Click
  handleClick = (e) => {
    console.log("button was click ");
  };

  //Al Enviar
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submit");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            ></input>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            ></input>
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            ></input>
          </div>
          <div className="form-group">
            <label>Facebook</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="facebook"
              value={this.state.facebook}
            ></input>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
//Por defecto Si un boton se encuentra en un formulario son de tipo "Submit" lo que cargara la pagina,
// para evitar esto se puede especificar que es tipo "button" o manejándolo desde el formulario cuando ocurre el evento onSubmit

export default BadgeForm;
