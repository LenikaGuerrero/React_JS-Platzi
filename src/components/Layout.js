import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  //const children = props.children - ver los hijos que contiene
  return (
    //Siempre se tiene que regresar un solo elemento por eso
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
