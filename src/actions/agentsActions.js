import axios from "axios";

import * as actions from "./actionsDef";

export const getAgentsList = () => dispatch => {
  try {
    let response = await axios({
      method: "GET",
      url: "/bienImmobiliers/agent/all",
      headers: { Authorization: localStorage.getItem("Authorization") }
    });

    dispatch({
      type: actions.FETCH_MY_ANNONCEMENTS_LIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: actions.FETCH_MY_ANNONCEMENTS_LIST_FAILURE,
      payload: "Fetching my annoncements failed, please to try again "
    });
  }
  //***********/
  // axios.get(`http://localhost:8080/clients/agents/all`).then(response =>
  //   dispatch({
  //     type: actions.FETCH_AGENT_SUCCESS,
  //     payload: response.data
  //   })
  // );
  // } catch (err) {
  //   dispatch({
  //     type: actions.FETCH_AGENT_FAILURE,
  //     payload: "Fetching announements list failed, please to terty "
  //   });
  // }
};
