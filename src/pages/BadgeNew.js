import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firtsName="Lenika"
                lastName="Guerrero"
                jobTitle="Ing. Sistemas Computacionales"
                facebook="LenikaGuerrero"
                avatarUrl="https://s.gravatar.com/avatar/12cc36990225cd2fcb6691034703adbc?s=80"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
