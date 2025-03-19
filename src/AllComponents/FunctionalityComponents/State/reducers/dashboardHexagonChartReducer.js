import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { skill: "Security\nOperations", level: 85 },
    { skill: "Incident Response", level: 75 },
    { skill: "Malware Analysis", level: 65 },
    { skill: "Penetration\u00A0\nTesting", level: 90 },
    { skill: "Exploitation", level: 80 },
    { skill: "Red Training", level: 70 },
  ],
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    updateChartData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateChartData } = chartSlice.actions;
export default chartSlice.reducer;
