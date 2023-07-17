import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    audioData: null,
    audioOptions: null,
    cardDetails: null,
    settings: { whatsapp: "01677756337", min_withdraw: 300 },
  },
  reducers: {
    setAudioData: (state, action) => {
      state.audioData = { ...state.audioData, ...action.payload };
    },
    setAudioOptions: (state, action) => {
      state.audioOptions = action.payload;
    },
    cleanAudioData: (state, action) => {
      state.audioData = action.payload;
    },
    setCardDetails: (state, action) => {
      state.cardDetails = action.payload;
    },
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
  },
});

export const {
  setAudioData,
  setAudioOptions,
  cleanAudioData,
  setCardDetails,
  setSettings,
} = dataSlice.actions;
export default dataSlice.reducer;
