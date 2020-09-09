import React from "react";
import "./styles/Badges.css";
import { Link } from "react-router-dom";
import api from "../api";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class Badges extends React.Component {
  state = {
    loading: true, //Lo primero que hara la pagina
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    //Declarar e inicializar Estado
    this.setState({ loading: true, error: null });

    //Llamar a la Api
    try {
      const data = await api.badges.list(); //Llamar los datos
      this.setState({ loading: false, data: data }); //Guarda los datos
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    //Estado de Carga
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    //Error
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
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
