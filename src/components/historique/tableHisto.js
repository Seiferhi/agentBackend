import React, { Component } from "react";
import { MDBDataTable, MDBIcon, MDBBtn } from "mdbreact";
import PropTypes from "prop-types";
import axios from "axios";

class historiqueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bienImmobiliers: []
    };
  }

  render() {
    const data = {
      columns: [
        {
          label: "Titre",
          field: "titre",
          sort: "asc",
          width: 150
        },
        {
          label: "Catégories",
          field: "catégories",
          sort: "asc",
          width: 150
        },

        {
          label: "Statut",
          field: "statut",
          sort: "asc",
          width: 100
        },
        {
          label: "Régions",
          field: "Régions",
          sort: "asc",
          width: 100
        },
        {
          label: "Surface",
          field: "surface",
          sort: "asc",
          width: 150
        },
        {
          label: "Prix",
          field: "prix",
          sort: "asc",
          width: 150
        },
        {
          label: "Agent",
          field: "agent",
          sort: "asc",
          width: 150
        },
        {
          label: "Description",
          field: "description",
          sort: "asc",
          width: 150
        }
      ],
      rows: []
    };

    return <MDBDataTable striped hover data={data} />;
  }
}

export default historiqueTable;
