import React, { Component } from "react";
import { MDBDataTable, MDBIcon, MDBBtn } from "mdbreact";
import PropTypes from "prop-types";
import axios from "axios";

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/clients/all")
      .then(res => {
        this.setState({ clients: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.clients);
    const data = {
      columns: [
        {
          label: "Nom",
          field: "nom",
          sort: "asc",
          width: 150
        },
        {
          label: "Prenonom",
          field: "prenom",
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
          label: "Actions",
          field: "actions",
          sort: "asc",
          width: 150
        }
      ],
      rows: []
    };

    {
      this.state.clients.map(client =>
        data.rows.push({
          Nom: client.nom,
          Prenom: client.prenom,
          "Email ": client.email,
          Telephone: client.tel,
          Actions: (
            <div>
              <MDBBtn floating size="lg" style={{ marginLeft: "10px" }}>
                <MDBIcon icon="fas fa-trash-alt" style={{ color: "red" }} />
              </MDBBtn>
              <MDBBtn
                floating
                size="lg"
                style={{ marginLeft: "12px", marginRight: "-1px" }}
              >
                <MDBIcon icon="fas fa-check" style={{ color: "#37f308e8" }} />
              </MDBBtn>
              <MDBBtn
                floating
                size="lg"
                style={{ marginLeft: "13px", marginRight: "13px" }}
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

export default ClientTable;
