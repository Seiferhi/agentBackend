import React, { Component } from "react";
import {connect} from "react-redux"


class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    const { user } = this.props;
    return (
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-form">
              <div className="row">
                <form className="callus">
                  <div className="col-sm-12">
                    <div className="single-query">
                      <label>
                        <i className="fas fa-user"> Nom && Prénom:</i>
                      </label>
                      <h6>{user.nom}</h6>
                    </div>
                  </div>{" "}
                  <hr />
                  <div className="col-sm-12">
                    <div className="single-query">
                      <label>
                        <i className="fas fa-phone-alt">Téléphone:</i>
                      </label>
                      <h6>{user.tel}</h6>
                    </div>
                  </div>
                  <hr />
                  <div className="col-sm-12">
                    <div className="single-query">
                      <label>
                        <i className="fas fa-at">Adresse</i>
                      </label>
                      <h6>{user.adress}</h6>
                    </div>
                  </div>
                  <hr />
                  <div className="col-sm-12">
                    <div className="single-query">
                      <label>Description:</label>

                      <p className="m-t-30">{user.description}</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
