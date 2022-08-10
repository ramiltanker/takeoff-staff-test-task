import { combineReducers } from "redux";

import contactsReducer from "./contacts";
import authReducer from "./auth";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
