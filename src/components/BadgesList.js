import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    // Si no hubo un dato...
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No se encontro ningun Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Crea un nuevo Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            //key:ideintificador unico cuando se enlistan varios elementos
            //ayuda a determinar cuando el elemento se vuelve a renderizar y ver si se mantuvo en la lista o cambio
            <li key={badge.id} className="BadgesListItem">
              <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt="Avatar"
              />
              <div>
                <div>
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                </div>
                <div className="Twitter__name">
                  <span className="Twitter__logo"></span>@{badge.twitter}
                </div>
                <div>{badge.jobTitle}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
