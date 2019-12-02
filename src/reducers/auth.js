import {AUTH_USER} from "../actions/actionsDef";

const initialState = {
  curentUser:'',
  errorMessage:''
}

 const authReducer = (state=initialState,action) =>{
  switch (action.type) {
    case AUTH_USER:
      return { ...state, token: action.payload, error: "" };
    default:
      return state;
  }
}

export default authReducer