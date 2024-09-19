import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
export const selectContacts = (state) => state.contacts.items;
export const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  reducers: {
    // fetchingInProgress: (state) => {
    //   state.isLoading = true;
    // },
    // fetchingSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // fetchingError: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContact,
  deleteContact,
} = slice.actions;
export default slice.reducer;
