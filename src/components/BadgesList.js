import React, { Component } from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            //key:ideintificador unico cuando se enlistan varios elementos
            //ayuda a determinar cuando el elemento se vuelve a renderizar y ver si se mantuvo en la lista o cambio
            <li key={badge.id} className="BadgesListItem">
              <img className="BadgesListItem__avatar" src={badge.avatarUrl} />
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
