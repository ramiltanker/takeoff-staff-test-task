import handleLogin from "../../api/login";
import { loginRequest, loginSuccess, loginFailed } from "../reducers/auth";
import { AppDispatch } from "../../types/redux";

export const login = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(loginRequest());
    handleLogin(email, password)
      .then((res) => {
        if (res) {
          dispatch(loginSuccess(res));
        } else {
          dispatch(loginFailed());
        }
      })
      .catch((err) => {
        dispatch(loginFailed());
      });
  };
};
