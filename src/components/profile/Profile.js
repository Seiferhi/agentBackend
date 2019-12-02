import React, { Component } from "react";
import { connect } from "react-redux";
import Parametre from "./parametre";

import Info from "./infoPersonnel";

class Profil extends Component {
  render() {
   const {user} = this.props;
    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          {/* Bread crumb and right sidebar toggle */}
          <div className="row page-titles">
            <div className="col-md-5 align-self-center">
              <h3 className="text-themecolor">Profile</h3>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">Acceuil</a>
                </li>
                <li className="breadcrumb-item active">Profil</li>
              </ol>
            </div>

            <div className>
              <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
                <i className="ti-settings text-white" />
              </button>
            </div>
          </div>

          {/* End Bread crumb and right sidebar toggle */}

          {/* Start Page Content */}
          {/* Row */}
          <div className="row">
            {/* Column */}
            <div className="col-lg-4 col-xlg-3 col-md-5">
              <div className="card">
                <div className="card-body">
                  <center className="m-t-30">
                    {" "}
                    <img
                      src="../assets/images/users/5.jpg"
                      className="img-circle"
                      width={150}
                    />
                    <h4 className="card-title m-t-10">{user.nom}</h4>
                    <h6 className="card-subtitle">
                      {user.role==="agent" ? "Agent" : `Chef d'agence`}
                    </h6>
                    <div className="row text-center justify-content-md-center">
                      <div className="col-4">
                        <a href="javascript:void(0)" className="link">
                          <i className="icon-people" />{" "}
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javascript:void(0)" className="link">
                          <i className="icon-picture" />{" "}
                        </a>
                      </div>
                    </div>
                  </center>
                </div>
                <div>
                  <hr />{" "}
                </div>
                <div className="card-body" style={{ height: "477px" }}>
                  {" "}
                  <small className="text-muted">Email address </small>
    <h6>{user.email}</h6>{" "}
                  <small className="text-muted p-t-30 db">téléphone</small>
    <h6>{user.tel}</h6>{" "}
                  <small className="text-muted p-t-30 db"> Réseau social</small>
                  <br />
                  <button className="btn btn-circle btn-secondary">
                    <i className="fab fa-facebook" />
                  </button>
                  <button className="btn btn-circle btn-secondary">
                    <i className="fab fa-twitter" />
                  </button>
                  <button className="btn btn-circle btn-secondary">
                    <i className="fab fa-youtube" />
                  </button>
                </div>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="col-lg-8 col-xlg-9 col-md-7">
              <div className="card" style={{ height: "800px" }}>
                {/* Nav tabs */}
                <ul className="nav nav-tabs profile-tab" role="tablist">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      Profil
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#settings"
                      role="tab"
                    >
                      Paramètres
                    </a>{" "}
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div className="tab-pane active" id="home" role="tabpanel">
                    <Info user={user}/>
                  </div>
                  <div className="tab-pane" id="settings" role="tabpanel">
                    <Parametre />
                  </div>
                </div>
              </div>
            </div>
            {/* Column */}
          </div>
          {/* Row */}

          {/* End PAge Content */}
          {/* Right sidebar */}
          {/* .right-sidebar */}

          {/* End Right sidebar */}
        </div>
        {/* <!-- End Container fluid  --> */}
      </div>
    );
  }
}

const mapStatetToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStatetToProps, null)(Profil);
