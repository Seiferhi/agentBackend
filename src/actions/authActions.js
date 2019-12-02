import {AUTH_USER} from "./actionsDef";

export const user_auth = usertocken => dispatch => {
  dispatch({
    type: AUTH_USER,
    payload: usertocken
  });
};
