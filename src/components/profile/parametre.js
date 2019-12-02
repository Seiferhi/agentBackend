import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { editProfileAction } from "../../actions/userActions";

class Parametre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      adress: "",
      tel: "",
      email: "",
      description: "",
      motDePasse: "",
      motDePasse2: "",
      isEditable: false
    };
  }

  componentDidMount() {
    //this.accessControl();
    this.setState({
      ...this.props.user
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitChangeClicked = () => {
    if (this.state.motDePasse === this.state.motDePasse2) {
      this.props.editProfileAction({ ...this.state });
      this.props.history.push("/admin");
    } else {
      alert("Mot de passe non identique");
    }
  };

  render() {
    return (
      <div className="card-body">
        <form className="form-horizontal form-material">
          <div className="form-group">
            <label htmlFor="example-email" className="col-md-12">
              Nom :
            </label>
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                className="form-control form-control-line"
                value={this.state.nom}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="example-email" className="col-md-12">
              Nom :
            </label>
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Prénom"
                name="prenom"
                className="form-control form-control-line"
                value={this.state.prenom}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="example-email" className="col-md-12">
              Email :
            </label>
            <div className="col-md-12">
              <input
                type="email"
                placeholder="mail@exemple.com"
                className="form-control form-control-line"
                name="email"
                id="example-email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="example-email" className="col-md-12">
              Téléphone :
            </label>
            <div className="col-md-12">
              <input
                type="tel"
                placeholder="téléphone"
                className="form-control form-control-line"
                name="tel"
                id="example-email"
                value={this.state.tel}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">Adresse </label>
            <div className="col-md-12">
              <textarea
                rows={2}
                name="adress"
                className="form-control form-control-line"
                value={this.state.adress}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">Description</label>
            <div className="col-md-12">
              <textarea
                rows={3}
                className="form-control form-control-line"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">Mot De Passe</label>
            <div className="col-md-12">
              <input
                type="password"
                className="form-control form-control-line"
                name="motDePasse"
                value={this.state.motDePasse}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12"> Confirmer Mot De Passe</label>
            <div className="col-md-12">
              <input
                type="password"
                defaultValue="password"
                className="form-control form-control-line"
                name="motDePasse2"
                value={this.state.motDePasse2}
                onChange={this.onChange}
              />
            </div>
          </div>
        </form>
        <div className="form-group" style={{ marginTop: "60px" }}>
          <div className="col-sm-12">
            <button
              className="btn btn-warning"
              style={{ width: "132px" }}
              onClick={this.onSubmitChangeClicked}
            >
              Enregistrer
            </button>
          </div>
          <div
            className="col-sm-12"
            style={{ marginTop: " -63px", marginLeft: "141px" }}
          >
            <button className="btn btn-danger" style={{ width: "132px" }}>
              Annuler
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default compose(
  connect(mapStateToProps, { editProfileAction }),
  withRouter
)(Parametre);
