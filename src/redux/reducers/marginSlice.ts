// reducers/marginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MarginState {
  value: number;
}

const initialState: MarginState = {
  value: 0,
};

const marginSlice = createSlice({
  name: 'margin',
  initialState,
  reducers: {
    setMargin: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setMargin } = marginSlice.actions;
export default marginSlice.reducer;
