import React from "react"; //Importar React = Create Element
import ReactDOM from "react-dom"; //Importar ReactDOM = appendChild

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge"; // Importar Componente

const container = document.getElementById("app"); //Donde poner el elemento

//ReactDOM.render(__que renderizar__,__Donde renderizar__)
//ReactDOM.render(element, container);

//ReactDOM.render pide un elemento no un componente por lo que se debe de poner un elemento con: </>

ReactDOM.render(
  <Badge
    firtsName="Lenika"
    lastName="Guerrero"
    jobTitle="Ing. Sistemas Computacionales"
    facebook="LenikaGuerrero"
    avatarUrl="https://s.gravatar.com/avatar/12cc36990225cd2fcb6691034703adbc?s=80"
  />,
  container
);
