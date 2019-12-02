import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";

import PropTypes from "prop-types";
import axios from "axios";


class AutresTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autres: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/autres/all")
      .then(res => {
        this.setState({ autres: res.data });
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
          label: "Titre",
          field: "titre",
          sort: "asc",
          width: 100
        },
        {
          label: "Description",
          field: "description",
          sort: "asc",
          width: 100
        }
      ],
      rows: []
    };
    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

    {
      this.state.autres.map(autre =>
        data.rows.push({
          Nom: autre.nom,
          "Email ": autre.email,
          Titre: autre.titre,
          Description: autre.description
        })
      );
    }
    return (
      <MDBDataTable striped hover data={data} />
    );
  }
}

export default AutresTable;
