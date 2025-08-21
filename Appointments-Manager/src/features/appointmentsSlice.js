import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("appointments");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("appointments", JSON.stringify(state));
  } catch {}
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: loadFromLocalStorage(),
  reducers: {
    addAppointment: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
      saveToLocalStorage(state);
    },

updateAppointment: (state, action) => {
  const { id, updated } = action.payload;
  const newState = state.map((item) =>
    item.id == id ? { ...item, ...updated } : item
  );
  saveToLocalStorage(newState);
  return newState;
},

    deleteAppointment: (state, action) => {
      const newState = state.filter((e) => e.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
    
    clearAppointments: () => {
      saveToLocalStorage([]);
      return [];
    }
  },
});

export const { addAppointment, updateAppointment, deleteAppointment, clearAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
