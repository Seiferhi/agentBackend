import React from "react";
import { connect } from "react-redux";
import {
  editSelectedAnnoncementAction,
  getMyAnnoncementsAction
} from "../../../actions/annoncesActions";
import { MDBDataTable, MDBIcon, MDBBtn } from "mdbreact";
import { Link, NavLink } from "react-router-dom";

class TableAnnonce extends React.Component {
  state = {
    data: {
      columns: [
        {
          label: "Titre",
          field: "titre",
          sort: "asc",
          width: 270
        },
        {
          label: "situation",
          field: "situation",
          sort: "asc",
          width: 200
        },
        {
          label: "statut",
          field: "statut",
          sort: "asc",
          width: 100
        },
        {
          label: "etat",
          field: "etat",
          sort: "asc",
          width: 150
        },
        {
          label: "Action",
          field: "actions",
          sort: "asc",
          width: 100
        }
      ],
      rows: [
        //   {
        //     Id: "Tiger Nixon",
        //     titre: "System Architect",
        //     office: "Edinburgh",
        //     region: "61",
        //     surface: "2011/04/25",
        //     prix: "$320",
        //     actionS: (
        //       <div>
        //         <MDBBtn floating size="lg" style={{ marginLeft: "10px" }}>
        //           <MDBIcon icon="fas fa-trash-alt" style={{ color: "red" }} />
        //         </MDBBtn>
        //         <MDBBtn
        //           floating
        //           size="lg"
        //           style={{ marginLeft: "12px", marginRight: "-1px" }}
        //         >
        //           <MDBIcon icon="fas fa-check" style={{ color: "#37f308e8" }} />
        //         </MDBBtn>
        //         <MDBBtn
        //           floating
        //           size="lg"
        //           style={{ marginLeft: "13px", marginRight: "13px" }}
        //         >
        //           <MDBIcon
        //             icon="far fa-pause-circle"
        //             style={{ color: "#ff9041" }}
        //           />
        //         </MDBBtn>
        //         <MDBBtn
        //           floating
        //           size="lg"
        //           style={{ marginLeft: "7x", marginRight: "-49px" }}
        //         >
        //           <MDBIcon icon="far fa-eye" />
        //         </MDBBtn>
        //       </div>
        //     )
        //   },
        //   {
        //     Id: "Tiger Nixon",
        //     titre: "System Architect",
        //     office: "Edinburgh",
        //     region: "61",
        //     surface: "2011/04/25",
        //     prix: "$320",
        //     actionS: (
        //       <div>
        //         <MDBBtn floating size="lg" style={{ marginLeft: "10px" }}>
        //           <MDBIcon icon="fas fa-trash-alt" style={{ color: "red" }} />
        //         </MDBBtn>
        //         <MDBBtn
        //           floating
        //           size="lg"
        //           style={{ marginLeft: "12px", marginRight: "-1px" }}
        //         >
        //           <MDBIcon icon="fas fa-check" style={{ color: "#37f308e8" }} />
        //         </MDBBtn>
        //         <MDBBtn
        //           floating
        //           size="lg"
        //           style={{ marginLeft: "13px", marginRight: "13px" }}
        //         >
        //           <MDBIcon
        //             icon="far fa-pause-circle"
        //             style={{ color: "#ff9041" }}
        //           />
        //         </MDBBtn>
        //         <MDBBtn
        //           floating
        //           size="lg"
        //           style={{ marginLeft: "7x", marginRight: "-49px" }}
        //         >
        //           <MDBIcon icon="far fa-eye" />
        //         </MDBBtn>
        //       </div>
        //     )
        //   }
      ]
    }
  };

  componentWillReceiveProps = nextProps => {
    console.log("nextProps :", nextProps);
    if (nextProps == undefined) {
      return false;
    } else {
      this.setState({
        data: {
          ...this.state.data,
          rows: nextProps.mesProprietes.map((elm, i) => {
            return {
              titre: elm.titre,
              situation: elm.situation ? "true" : "false",
              statut: elm.statut,
              etat: elm.etat,
              actionS: (
                <div>
                  <MDBBtn
                    floating
                    size="lg"
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      this.props
                        .editSelectedAnnoncementAction({
                          etat: "non confirme",
                          situation: false,
                          _id: elm._id
                        })
                        .then(() => this.props.getMyAnnoncementsAction())
                    }
                  >
                    <MDBIcon icon="fas fa-trash-alt" style={{ color: "red" }} />
                  </MDBBtn>
                  <MDBBtn
                    floating
                    size="lg"
                    style={{ marginLeft: "12px", marginRight: "-1px" }}
                    onClick={() =>
                      this.props
                        .editSelectedAnnoncementAction({
                          etat: "confirme",
                          situation: true,
                          _id: elm._id
                        })
                        .then(() => this.props.getMyAnnoncementsAction())
                    }
                  >
                    <MDBIcon
                      icon="fas fa-check"
                      style={{ color: "#37f308e8" }}
                    />
                  </MDBBtn>
                  <MDBBtn
                    floating
                    size="lg"
                    style={{ marginLeft: "13px", marginRight: "13px" }}
                    onClick={() =>
                      this.props
                        .editSelectedAnnoncementAction({
                          etat: "en attente",
                          _id: elm._id
                        })
                        .then(() => this.props.getMyAnnoncementsAction())
                    }
                  >
                    <MDBIcon
                      icon="far fa-pause-circle"
                      style={{ color: "#ff9041" }}
                    />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    size="lg"
                    style={{ marginLeft: "7x", marginRight: "-49px" }}
                  >
                    <Link to={`/modifier-annonce/${elm._id}`}>
                      <MDBIcon icon="far fa-eye" />
                    </Link>
                  </MDBBtn>
                </div>
              )
            };
          })
        }
      });
    }
  };

  render() {
    console.log("state : ", this.state.data);
    return (
      <MDBDataTable
        title="Demandes des Ventes"
        striped
        bordered
        small
        data={this.state.data}
      />
    );
  }
}

export default connect(null, {
  editSelectedAnnoncementAction,
  getMyAnnoncementsAction
})(TableAnnonce);
