import React, { Component } from "react";
import { MDBDataTable, MDBIcon, MDBBtn } from "mdbreact";
import PropTypes from "prop-types";
import axios from "axios";

class EtudeProjetTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etudeProjets: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/etudeProjets/all")
      .then(res => {
        this.setState({ etudeProjets: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const data = {
      columns: [
        {
          label: "Nom",
          field: "nom",
          sort: "asc",
          width: 150
        },

        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 100
        },
        {
          label: "Telephone",
          field: "telephone",
          sort: "asc",
          width: 100
        },

        {
          label: "Profession & Description",
          field: "description & Description",
          sort: "asc",
          width: 100
        },
        {
          label: "Titre",
          field: "titre",
          sort: "asc",
          width: 150
        },

        {
          label: "Localistion",
          field: "localistion",
          sort: "asc",
          width: 100
        },
        {
          label: "Budget",
          field: "budget",
          sort: "asc",
          width: 100
        },

        {
          label: "Description du projet",
          field: "description du projet",
          sort: "asc",
          width: 100
        },
        {
          label: "Actions",
          field: "Actions",
          sort: "asc",
          width: 100
        }
      ],
      rows: []

    };

    {
      this.state.etudeProjets.map(etudeProjet =>
        data.rows.push({
          Nom: etudeProjet.nom,
          "Email ": etudeProjet.email,
          Telephone: etudeProjet.tel,
          "Profession & Description": etudeProjet.description,
          Titre: etudeProjet.titre,
          "Budget ": etudeProjet.budget,
          Localisation: etudeProjet.localisation,
          "Profession du projet": etudeProjet.description2,
          Actions: (
            <div style={{width: "150px"}}>
              <MDBBtn
                floating
                size="lg"
                style={{ marginLeft: "10px"}}
              >
                <MDBIcon icon="fas fa-trash-alt" style={{ color: "red"}} />
              </MDBBtn>
              <MDBBtn floating size="lg" style={{ marginLeft: "12px",
      marginRight: "-1px"}}>
                <MDBIcon icon="fas fa-check" style={{ color: "#37f308e8"}} />
              </MDBBtn>
              <MDBBtn floating size="lg" style={{ marginLeft: "13px",
      marginRight: "13px"}}>
                <MDBIcon icon="far fa-pause-circle" style={{ color: "#ff9041" }} />
              </MDBBtn>
              <MDBBtn floating size="lg" style={{ marginLeft: "7x",
      marginRight: "-49px"}}>
                <MDBIcon icon="far fa-eye" />
              </MDBBtn>
            </div>
          )
        })
      );
    }

    return <MDBDataTable striped hover data={data} />;
  }
}
export default EtudeProjetTable;
