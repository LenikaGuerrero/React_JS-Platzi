import React from "react";

import "./styles/PageError.css";
import ErrorS from "../images/500.svg";
import { Link } from "react-router-dom";

function PageError(props) {
  //props.error.message - Evalua el valor del error
  return (
    <div className="ErrorServer">
      <div className="container">
        <div className="row">
          <div className="ErrorServer__col col-12 col-md-4">
            <h1>{props.error.message}</h1>
            <h7>Pronto volvemos...</h7>
            <Link className="btn btn-primary" to="/">
              Regresar a Casa
            </Link>
          </div>

          <div className="ErrorServer__col d-none d-md-block col-md-8">
            <img src={ErrorS} alt="Astronaut 500" className="img-fluid p-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageError;
