import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import ClientTable from "./clientTable";

class Client extends Component {
  render() {
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
                  <li className="breadcrumb-item">Table Clients</li>
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
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive m-t-40">
                      <ClientTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Container fluid  */}
        </div>
      </div>
    );
  }
}
export default Client;
