import { combineReducers } from "redux";
import authReduce from "./auth";
import agentsReducer from "./agentsReducer";
import mesProprietesReducer from "./mesProprietes";
import userReducer from "./user";
import editableAnnoncementReducer from "./editableAnnoncement";
//import announcementsReducer from "./annonces";

let reducers = combineReducers({
  authReduce,
  mesProprietesReducer,
  agentsReducer,
  userReducer,
  editableAnnoncementReducer
});

export default reducers;
