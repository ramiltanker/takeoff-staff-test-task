import handleGetContacts from "../../api/getContacts";
import handleUpdateContact from "../../api/updateContact";
import handleDeleteContact from "../../api/deleteContact";
import handleCreateContact from "../../api/createContact";
import { AppDispatch } from "../../types/redux";
import { ContactType } from "../../types/contacts";
import {
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
} from "../reducers/contacts";

export const getContacts = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getContactsRequest());
    handleGetContacts()
      .then((res: Array<ContactType>) => {
        if (res) {
          dispatch(getContactsSuccess(res));
        } else {
          dispatch(getContactsFailed());
        }
      })
      .catch((err) => {
        dispatch(getContactsFailed());
      });
  };
};

export const updateContact = (id: string, name: string, phone: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(updateContactRequest());
    handleUpdateContact(id, name, phone)
      .then((res: Array<ContactType>) => {
        if (res) {
          dispatch(updateContactSuccess(res));
        } else {
          dispatch(updateContactFailed());
        }
      })
      .catch((err) => {
        dispatch(updateContactFailed());
      });
  };
};

export const deleteContact = (id: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(deleteContactRequest());
    handleDeleteContact(id)
      .then((res) => {
        if (res) {
          dispatch(deleteContactSuccess(id));
        } else {
          dispatch(deleteContactFailed());
        }
      })
      .catch((err) => {
        dispatch(deleteContactFailed());
      });
  };
};

export const createContact = (name: string, phone: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(createContactRequest());
    handleCreateContact(name, phone)
      .then((res) => {
        if (res) {
          dispatch(createContactSuccess(res));
        } else {
          dispatch(createContactFailed());
        }
      })
      .catch((err) => {
        dispatch(createContactFailed());
      });
  };
};
