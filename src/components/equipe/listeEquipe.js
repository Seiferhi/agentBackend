import React from "react";
import MaterialTable from "material-table";
import { getAgentsList } from "../../actions/userActions";
import { connect } from "react-redux";
import axios from "axios";
import { format } from "path";

class TableEquipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      tel: "",
      email: "",
      motDepasse: "",
      motDepasse2: "",
      errors: {},

      columns: [
        { title: "Nom", field: "nom" },

        {
          title: "Prénom",
          field: "prenom"
        },
        {
          title: "téléphone",
          field: "tel"
        },
        {
          title: "Email",
          field: "email"
        },

        { title: "Mot De Passe", field: "motDepasse" },
        { title: "Confirmer Mot De Passe", field: "motDepasse2" }
      ],
      data: []
    };
  }
  // componentDidMount() {
  //   console.log(this.props.agentsList);
  // }

  render() {
    console.log("this.props : ", this.props.agents);
    //
    return (
      <MaterialTable
        title="Liste Des Agents"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: agent =>
            new Promise((resolve, reject) => {
              const data = this.state.data;
              const newAgent = {
                nom: agent.nom,
                prenom: agent.prenom,
                tel: agent.tel,
                email: agent.email,
                motDePasse: agent.motDepasse,
                motDePasse2: agent.motDepasse2,
                role: "agent"
              };

              axios
                .post("http://localhost:8080/clients/register", newAgent)
                .then(res => console.log(res.data))
                .catch(err => console.log(err.response.data));
              console.log(agent);
              data.push(newAgent);

              this.setState({ data }, () => resolve());

              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            })
        }}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    agentsList: state.agentsReducer.agents
  };
};

export default connect(mapStateToProps, { getAgentsList })(TableEquipe);
