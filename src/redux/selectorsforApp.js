import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectToDo = createSelector(
  [selectContacts, selectNameFilter],
  (users, inputFilter) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(inputFilter.toLowerCase())
    );
  }
);
