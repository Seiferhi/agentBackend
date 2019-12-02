import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileAction } from "./actions/userActions";

import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Annonces from "./components/Annonces/Annonces";
import { BrowserRouter, Route } from "react-router-dom";
import AjouterAnnocne from "./components/AjouterAnnonce/AjouterAnnonce";
import EditAnnoncement from "./components/EditAnnonce/EditAnnoncement";
import Profil from "./components/profile/Profile";
import BoiteRec from "./components/boiteDeReception/boiteDeReception";
import DetaillesMgs from "./components/boiteDeReception/detailleMsg";
import DemandeVente from "./components/demandes/vente/Vente";
import Conseils from "./components/service/conseils/conseils";
import EtudeProjet from "./components/service/etudeProjet/etudeProjet";
import Autre from "./components/service/autres/autre";
import Client from "./components/client/clients";
import Equipe from "./components/equipe/equipe";
import DemandeAchat from "./components/demandes/achats/achats";
import DemandeLocation from "./components/demandes/locations/locations";
import Historique from "./components/historique/historique";

class App extends Component {
  componentDidMount() {
    this.props.getProfileAction();
  }
  render() {
    return (
      <BrowserRouter>
        <TopBar />
        <Route exact path="/annonces" component={Annonces} />
        <Route
          exact
          path="/annonces/ajouterAnnonce"
          component={AjouterAnnocne}
        />
        <Route
          exact
          path="/modifier-annonce/:id"
          render={props => <EditAnnoncement id={props.match.params.id} />}
        />
        <Route exact path="/profil" component={Profil} />
        <Route exact path="/boiteReception" component={BoiteRec} />
        <Route exact path="/detaillesMessage" component={DetaillesMgs} />
        <Route exact path="/demandeVente" component={DemandeVente} />
        <Route exact path="/demandeLocation" component={DemandeLocation} />
        <Route exact path="/conseils" component={Conseils} />
        <Route exact path="/etudeProjets" component={EtudeProjet} />
        <Route exact path="/autres" component={Autre} />
        <Route exact path="/clients" component={Client} />
        <Route exact path="/listeEquipe" component={Equipe} />
        <Route exact path="/demandeAchat" component={DemandeAchat} />
        <Route exact path="/historique" component={Historique} />

        <SideBar />
      </BrowserRouter>
    );
  }
}

export default connect(null, { getProfileAction })(App);
