import axios from "axios";
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://66e8053db17821a9d9daff3c.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/getContact",
  async () => {
    const response = await axios.get("/contacts");
    return response.data;
  }
);
//   () => async (dispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/contacts");
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };
