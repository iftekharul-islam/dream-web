import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    audioData: null,
    audioOptions: null,
    cardDetails: null
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
    }
  },
});

export const { setAudioData, setAudioOptions, cleanAudioData, setCardDetails } = dataSlice.actions;
export default dataSlice.reducer;
