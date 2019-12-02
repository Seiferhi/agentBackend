import React from "react";
import { MDBDataTable, MDBIcon, MDBBtn } from "mdbreact";

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: "Id",
        field: "id",
        sort: "asc",
        width: 150
      },
      {
        label: "Titre",
        field: "titre",
        sort: "asc",
        width: 270
      },
      {
        label: "Catégories",
        field: "office",
        sort: "asc",
        width: 200
      },
      {
        label: "Région",
        field: "region",
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
        width: 100
      },
      {
        label: "Action",
        field: "actions",
        sort: "asc",
        width: 100
      }
    ],
    rows: [
      {
        Id: "Tiger Nixon",
        titre: "System Architect",
        office: "Edinburgh",
        region: "61",
        surface: "2011/04/25",
        prix: "$320",
        actionS: (
          <div>
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
      }
      
    ]
  };

  return <MDBDataTable  title ="Demandes des Ventes"striped bordered small data={data} />;
};

export default DatatablePage;
