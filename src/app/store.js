import { configureStore } from "@reduxjs/toolkit";
import { userAuthSlice } from "../features/useAuthSlice";

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice.reducer,
  },
});
