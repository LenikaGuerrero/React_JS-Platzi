import React from "react"; //Importar React = Create Element
import ReactDOM from "react-dom"; //Importar ReactDOM = appendChild

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew"; // Importar Componente
import Badges from "./pages/Badges";

const container = document.getElementById("app"); //Donde poner el elemento

//ReactDOM.render(__que renderizar__,__Donde renderizar__)
//ReactDOM.render(element, container);

//ReactDOM.render pide un elemento no un componente por lo que se debe de poner un elemento con: </>

ReactDOM.render(<Badges />, container);
