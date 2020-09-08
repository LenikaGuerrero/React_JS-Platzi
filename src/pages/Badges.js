import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";

class Badges extends React.Component {
  constructor(props) {
    //recibe props
    super(props); //inicializar la super clase
    console.log("1. constructor()");
    this.state = {
      data: [],
    };
  }
  //Montaje
  componentDidMount() {
    console.log("3. componentDidMount()");
    //simulacion a api
    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarUrl:
              "https://image.freepik.com/vector-gratis/cute-golden-retriever-cachorro-patas-sobre-pared_42750-615.jpg",
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "ajorRodriguez61545",
            avatarUrl:
              "https://image.freepik.com/vector-gratis/lindo-perro-husky-siberiano-patas-sobre-dibujos-animados-pared_42750-520.jpg",
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarUrl:
              "https://image.freepik.com/vector-gratis/gracioso-perro-jack-russell-terrier-sonriendo-sobre-dibujos-animados-pared_42750-681.jpg",
          },
        ],
      });
    }, 3000);
  }
  //Actualizacion
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }
  //Desmontaje
  componentWillUnmount() {
    console.log("6. componentWillUnmount()");
    clearTimeout(this.timeoutId); //cancela el trabajo que tiene asignado el id
  }

  render() {
    console.log("2/4. render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary ">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
