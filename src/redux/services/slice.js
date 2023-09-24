import { createSlice } from "@reduxjs/toolkit";

const servicesInitialState = {
  services: {
    data: null,
    isLoading: false,
    errors: "",
  },
};

export const servicesSlice = createSlice({
  name: "services",
  initialState: servicesInitialState,
  reducers: {
    getServicesAction: (state) => {
      state.services.isLoading = true;
      state.services.errors = "";
    },
    getServicesSuccessAction: (state, { payload: services }) => {
      state.services.isLoading = false;
      state.services.data = services;
    },
    getServicesErrorAction: (state, { payload: error }) => {
      state.services.isLoading = false;
      state.services.errors = error;
    },
  },
});

export const {
  getServicesAction,
  getServicesSuccessAction,
  getServicesErrorAction,
} = servicesSlice.actions;

export default servicesSlice.reducer;
