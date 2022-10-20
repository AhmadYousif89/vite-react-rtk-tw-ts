import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const initialState = {};

const initSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const initSelector = (state: RootState) => state.init;
export default initSlice.reducer;
