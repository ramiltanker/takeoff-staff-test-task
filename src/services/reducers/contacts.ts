import { createSlice } from "@reduxjs/toolkit";

import { ContactType } from "../../types/contacts";

type ContactsInitialState = {
  getContactsRequest: boolean;
  getContactsSuccess: boolean;
  getContactsFailed: boolean;
  updateContactRequest: boolean;
  updateContactSuccess: boolean;
  updateContactFailed: boolean;
  deleteContactRequest: boolean;
  deleteContactSuccess: boolean;
  deleteContactFailed: boolean;
  createContactRequest: boolean;
  createContactSuccess: boolean;
  createContactFailed: boolean;
  contacts: Array<ContactType> | [];
};

export const initialState: ContactsInitialState = {
  getContactsRequest: false,
  getContactsSuccess: false,
  getContactsFailed: false,
  updateContactRequest: false,
  updateContactSuccess: false,
  updateContactFailed: false,
  deleteContactRequest: false,
  deleteContactSuccess: false,
  deleteContactFailed: false,
  createContactRequest: false,
  createContactSuccess: false,
  createContactFailed: false,
  contacts: [],
};

const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getContactsRequest: (state) => {
      state.getContactsRequest = true;
      state.getContactsSuccess = false;
      state.getContactsFailed = false;
    },
    getContactsSuccess: (state, action) => {
      state.getContactsRequest = false;
      state.getContactsSuccess = true;
      state.getContactsFailed = false;
      state.contacts = action.payload;
    },
    getContactsFailed: (state) => {
      state.getContactsRequest = false;
      state.getContactsSuccess = false;
      state.getContactsFailed = true;
    },
    updateContactRequest: (state) => {
      state.updateContactRequest = true;
      state.updateContactSuccess = false;
      state.updateContactFailed = false;
    },
    updateContactSuccess: (state, action) => {
      state.updateContactRequest = false;
      state.updateContactSuccess = true;
      state.updateContactFailed = false;
      state.contacts = state.contacts.map((card) => {
        if (card.id === action.payload.id) {
          card = action.payload;
        }
        return card;
      });
    },
    updateContactFailed: (state) => {
      state.updateContactRequest = false;
      state.updateContactSuccess = false;
      state.updateContactFailed = true;
    },
    deleteContactRequest: (state) => {
      state.deleteContactRequest = true;
      state.deleteContactSuccess = false;
      state.deleteContactFailed = false;
    },
    deleteContactSuccess: (state, action) => {
      console.log(action.payload);
      state.deleteContactRequest = false;
      state.deleteContactSuccess = true;
      state.deleteContactFailed = false;
      state.contacts = state.contacts.filter((item) => {
        return item.id !== action.payload;
      });
    },
    deleteContactFailed: (state) => {
      state.deleteContactRequest = false;
      state.deleteContactSuccess = false;
      state.deleteContactFailed = true;
    },
    createContactRequest: (state) => {
      state.createContactRequest = true;
      state.createContactSuccess = false;
      state.createContactFailed = false;
    },
    createContactSuccess: (state, action) => {
      state.createContactRequest = false;
      state.createContactSuccess = true;
      state.createContactFailed = false;
      state.contacts = [...state.contacts, action.payload];
    },
    createContactFailed: (state) => {
      state.createContactRequest = false;
      state.createContactSuccess = false;
      state.createContactFailed = true;
    },
  },
});

export const {
  getContactsRequest,
  getContactsSuccess,
  getContactsFailed,
  updateContactRequest,
  updateContactSuccess,
  updateContactFailed,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactFailed,
  createContactRequest,
  createContactSuccess,
  createContactFailed,
} = contacts.actions;

export default contacts.reducer;
