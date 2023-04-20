import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({
    profile: profileSlice
  })
});

export default store;
