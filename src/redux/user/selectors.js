import { createSelector } from "reselect";

const selectUser = (state) => state.user.currentUser;

export const selectCurrentUser = createSelector(
  [selectUser],
  (currentUser) => currentUser
);
