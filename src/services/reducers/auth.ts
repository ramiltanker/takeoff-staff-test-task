import { createSlice } from "@reduxjs/toolkit";

type AuthInitialState = {
  loginRequest: boolean;
  loginSuccess: boolean;
  loginFailed: boolean;
};

export const initialState: AuthInitialState = {
  loginRequest: false,
  loginSuccess: false,
  loginFailed: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loginRequest = true;
      state.loginSuccess = false;
      state.loginFailed = false;
    },
    loginSuccess: (state, action) => {
      state.loginRequest = false;
      state.loginSuccess = true;
      state.loginFailed = false;
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin: true,
          token: action.payload,
        })
      );
    },
    loginFailed: (state) => {
      state.loginRequest = false;
      state.loginSuccess = false;
      state.loginFailed = true;
    },
    loginLogout: (state) => {
      state.loginRequest = false;
      state.loginSuccess = false;
      state.loginFailed = false;
      localStorage.removeItem("login");
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed, loginLogout } =
  auth.actions;

export default auth.reducer;
