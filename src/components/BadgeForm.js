import React from "react";
class BadgeForm extends React.Component {
  //Al Cambiar
  handleChange = (e) => {
    console.log({
      name: e.target.name, // Nombre del Input que causa el evento
      value: e.target.value, //Valor que del Input
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
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Firts Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firtsName"
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
