import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getParag = createAsyncThunk("parag/getParag", async (a, data2) => {
  const res = await axios(
    `https://baconipsum.com/api/?type=all-meat&paras=${a}&start-with-lorem=1&format=html`
  );

  return res.data;
});
export const getParag2 = createAsyncThunk("parag2/getParag2", async (a, ) => {
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${a}&start-with-lorem=1&format=text`
    );
  
    return res.data;
  });
export const ParagrafSlice = createSlice({
  name: "parag",
  initialState: {
    paragraf: [],
    paras: 4,
  },
  reducers: {
    changeParas: (state, data) => {
      state.paras = data.payload;
    },
  },
  extraReducers: {
    [getParag.fulfilled]: (state, data) => {
      state.paragraf = data.payload;
    },
    [getParag2.fulfilled]: (state, data) => {
        state.paragraf = data.payload;
      },
  },
});
export default ParagrafSlice.reducer;
export const { changeParas } = ParagrafSlice.actions;
