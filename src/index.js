import React from "react"; //Importar React = Create Element
import ReactDOM from "react-dom"; //Importar ReactDOM = appendChild

const name = "Lenika";
const sum = () => 3 + 3;

//const jsx = <h1>Hello, Platzi Badges from React</h1>; //JSX

//---------------------------------------Alternativa a jsx - React.CreateElement

//const element = React.createElement('_Tipo de Elemento_', {_Argumentos(Propiedades)_}, '_Children(Contenido)_')

//-------------------------------------------------------------------- REACT.CREATEELEMENT

// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi"
// );

//const element = React.createElement("h1", {}, `Hola, soy ${name}`);

//------------------------------------------------------------------- JSX
//const jsx = <h1>Hola soy, {_expresiones_}</h1>; //JSX
//const jsx = <h1>Hola soy, {name}</h1>;
//const jsx = <h1>Hola soy, {sum()}</h1>;

//------------------------------------------------------------------- JSX

const jsx = (
  <div>
    <h1>Hola, soy Lenika</h1>
    Soy Ing. Sistemas Computacionales
  </div>
);

//------------------------------------------------------------------- REACT.CREATEELEMENT
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Lenika"),
  React.createElement("p", {}, "Soy Ing. Sistemas Computacionales")
);

const container = document.getElementById("app"); //Donde poner el elemento

//ReactDOM.render(__que renderizar__,__Donde renderizar__)
ReactDOM.render(element, container);
