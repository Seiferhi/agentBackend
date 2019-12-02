import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { getMyAnnoncementsAction } from "../../actions/annoncesActions";

import TableAnnonce from "./tableAnnonce/tableAnnonce";
class Annonces extends Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    this.props.getMyAnnoncementsAction();
   
  }

  mesProprietesToDisplay = () => {
    return this.state.currentPage === 1
      ? this.props.mesProprietes.slice(0, 3)
      : this.props.mesProprietes.slice(
          (this.state.currentPage - 1) * 3,
          this.state.currentPage * 3
        );
  };

  onPrevPaginationClick = () => {
    let { currentPage } = this.state;
    if (currentPage > 1) {
      return this.setState({
        currentPage: currentPage - 1
      });
    }
  };

  onNextPaginationClick = () => {
    let { currentPage } = this.state;
    if (currentPage < this.props.collectionLength) {
      return this.setState({
        currentPage: currentPage + 1
      });
    }
  };

  onSelectedPageClick = i => {
    this.setState({
      currentPage: i
    });
  };

  render() {
    const { mesProprietes} = this.props;

    return (
      <div className="Annonces">
        <div className="page-wrapper">
          {/* Container fluid  */}
          <div className="container-fluid">
            {/* Bread crumb and right sidebar toggle */}
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Acceuil</a>
                  </li>
                  <li className="breadcrumb-item active">Gérer les annonces</li>
                </ol>
              </div>
              <div className="col-md-7 align-self-center text-right d-none d-md-block">
                <Link to="/annonces/ajouterAnnonce">
                  <button type="button" className="btn btn-info">
                    <i className="fa fa-plus-circle" /> Ajouter Une Annonce
                  </button>
                </Link>
              </div>
              <div className>
                <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
                  <i className="ti-settings text-white" />
                </button>
              </div>
            </div>
            {/* End Bread crumb and right sidebar toggle */}
            {/* Start Page Content */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Data Table</h4>
                    <h6 className="card-subtitle">Data table example</h6>
                    <div className="table-responsive m-t-40">
                      <TableAnnonce mesProprietes={mesProprietes}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End PAge Content */}
            {/* .right-sidebar */}
            <div className="right-sidebar">
              <div className="slimscrollright">
                <div className="rpanel-title">
                  {" "}
                  Service Panel{" "}
                  <span>
                    <i className="ti-close right-side-toggle" />
                  </span>{" "}
                </div>
                <div className="r-panel-body">
                  <ul id="themecolors" className="m-t-20">
                    <li>
                      <b>With Light sidebar</b>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="default"
                        className="default-theme"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="green"
                        className="green-theme"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="red"
                        className="red-theme"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="blue"
                        className="blue-theme"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="purple"
                        className="purple-theme"
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="megna"
                        className="megna-theme"
                      >
                        6
                      </a>
                    </li>
                    <li className="d-block m-t-30">
                      <b>With Dark sidebar</b>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="default-dark"
                        className="default-dark-theme working"
                      >
                        7
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="green-dark"
                        className="green-dark-theme"
                      >
                        8
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="red-dark"
                        className="red-dark-theme"
                      >
                        9
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="blue-dark"
                        className="blue-dark-theme"
                      >
                        10
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="purple-dark"
                        className="purple-dark-theme"
                      >
                        11
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        data-theme="megna-dark"
                        className="megna-dark-theme "
                      >
                        12
                      </a>
                    </li>
                  </ul>
                  <ul className="m-t-20 chatonline">
                    <li>
                      <b>Chat option</b>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/users/1.jpg"
                          alt="user-img"
                          className="img-circle"
                        />{" "}
                        <span>
                          Varun Dhavan{" "}
                          <small className="text-success">online</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/users/2.jpg"
                          alt="user-img"
                          className="img-circle"
                        />{" "}
                        <span>
                          Genelia Deshmukh{" "}
                          <small className="text-warning">Away</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/users/3.jpg"
                          alt="user-img"
                          className="img-circle"
                        />{" "}
                        <span>
                          Ritesh Deshmukh{" "}
                          <small className="text-danger">Busy</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/users/4.jpg"
                          alt="user-img"
                          className="img-circle"
                        />{" "}
                        <span>
                          Arijit Sinh{" "}
                          <small className="text-muted">Offline</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/users/5.jpg"
                          alt="user-img"
                          className="img-circle"
                        />{" "}
                        <span>
                          Govinda Star{" "}
                          <small className="text-success">online</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/users/6.jpg"
                          alt="user-img"
                          className="img-circle"
                        />{" "}
                        <span>
                          John Abraham
                          <small className="text-success">online</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/users/7.jpg"
                          alt="user-img"
                          className="img-circle"
                        />{" "}
                        <span>
                          Hritik Roshan
                          <small className="text-success">online</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/users/8.jpg"
                          alt="user-img"
                          className="img-circle"
                        />{" "}
                        <span>
                          Pwandeep rajan{" "}
                          <small className="text-success">online</small>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Right sidebar */}
          </div>
          {/* End Container fluid  */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mesProprietes: state.mesProprietesReducer.mesProprietes,
    collectionLength: state.mesProprietesReducer.collectionLength,
    user: state.userReducer
  };
};

export default connect(mapStateToProps, {
  getMyAnnoncementsAction
})(Annonces);
