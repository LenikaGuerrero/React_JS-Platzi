import React from "react";
import "./styles/404.css";
import Error from "../images/404.svg";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="NotFound">
      <div className="container">
        <div className="row">
          <div className="NotFound__col col-12 col-md-4">
            <h1>404</h1>
            <h3>Pagina no Encontrada</h3>
            <h7>Parece que estas perdido...</h7>
            <Link className="btn btn-primary" to="/">
              Regresar a Casa
            </Link>
          </div>

          <div className="NotFound__col d-none d-md-block col-md-8">
            <img src={Error} alt="Astronaut 404" className="img-fluid p-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
