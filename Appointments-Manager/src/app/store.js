import { configureStore } from "@reduxjs/toolkit";
import appointmentsReducer from "../features/appointmentsSlice";

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },
});
