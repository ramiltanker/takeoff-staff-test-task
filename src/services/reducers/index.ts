import { combineReducers } from "redux";

import contactsReducer from "./contacts";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
