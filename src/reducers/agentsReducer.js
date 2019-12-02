import {
  FETCH_AGENT_SUCCESS,
  FETCH_AGENT_FAILURE
} from "../actions/actionsDef";

let agentsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_AGENT_SUCCESS:
      return { ...state, agents: action.payload, error: "" };
    case FETCH_AGENT_FAILURE:
      return { ...state, error: action.payload, error: "" };
    default:
      return state;
  }
};

export default agentsReducer;

const initialState = {
  agents: [],
  error: "",
  collectionLength: 0
};
