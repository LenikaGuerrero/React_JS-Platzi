//-----------------------------------------------------------------------------Sin React

// const element = document.createElement('h1') //Crear un Tipo de elemento
// element.innerText = 'Hello, Platzi Badges' //Texto del elemento
// const container = document.getElementById('app') //Donde poner el elemento

// container.appendChild(element) //Agregar el elemento al contenedor

//----------------------------------------------------------------------------- React

import React from "react"; //Importar React = Create Element
import ReactDOM from "react-dom"; //Importar ReactDOM = appendChild

//Para poder poner codigo JSX es necesario importar React

const element = <h1>Hello, Platzi Badges from React</h1>; // Creacion el elemento
const container = document.getElementById("app"); //Donde poner el elemento

//ReactDOM.render(__que renderizar__,__Donde renderizar__)
ReactDOM.render(element, container);
