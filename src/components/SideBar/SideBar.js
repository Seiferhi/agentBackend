import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { MDBIcon } from "mdbreact";

class SideBar extends Component {
  render() {
    let { user } = this.props;
    return (
      <div className="SideBar">
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div className="scroll-sidebar">
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="nav-small-cap">--- ANNONCES</li>
                {user.role === "agent" && (
                  <li>
                    <Link
                      className=" waves-effect waves-dark"
                      to="/annonces"
                      aria-expanded="false"
                    >
                      <i className="icon-Car-Wheel" />
                      <span className="hide-menu">Gérer les annonces </span>
                    </Link>
                  </li>
                )}

                <li className="nav-small-cap">--- DEMANDES</li>
                <li>
                  {" "}
                  <a
                    className="has-arrow waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="icon-File" />
                    <span className="hide-menu">Demandes</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    {/* <li>
                      <Link to="/demandeVente">Ventes</Link>
                    </li> */}
                    <li>
                      <Link to="/demandeAchat">Achats</Link>
                    </li>

                    <li>
                      <Link to="/demandeLocation">Locations</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a
                    className="has-arrow waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="icon-Files" />
                    <span className="hide-menu">
                      Services{" "}
                      <span className="label label-rounded label-info">25</span>
                    </span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <Link to="./etudeProjets">Etude Projet</Link>
                    </li>
                    <li>
                      <Link to="/conseils">Conseils</Link>
                    </li>

                    <li>
                      <a href="#">Estimations des prix</a>
                    </li>
                    <li>
                      <a href="#">Négociations</a>
                    </li>
                    <li>
                      <Link href="#">Demandes des visites</Link>
                    </li>
                    <li>
                      <Link to="/autres">Autres</Link>
                    </li>
                  </ul>
                </li>
                {user.role === "chefAgence" && (
                <li>
                  <Link
                    className=" waves-effect waves-dark"
                    to="/ListeEquipe"
                    aria-expanded="false"
                  >
                    <MDBIcon icon="fas fa-user-friends" />
                    <span className="hide-menu">Gérer l'Equipe </span>
                  </Link>
                </li>
                )}
                <li>
                  <Link
                    className=" waves-effect waves-dark"
                    to="/clients"
                    aria-expanded="false"
                  >
                    <MDBIcon icon="fas fa-users" />
                    <span className="hide-menu">Gérer les Clients </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className=" waves-effect waves-dark"
                    to="/historique"
                    aria-expanded="false"
                  >
                    <i className="icon-Car-Wheel" />
                    <span className="hide-menu">Historique </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className=" waves-effect waves-dark"
                    to=""
                    aria-expanded="false"
                  >
                    <i className="icon-Car-Wheel" />
                    <span className="hide-menu">Reporting </span>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
      </div>
    );
  }
}

const mapStatetToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStatetToProps, null)(SideBar);
