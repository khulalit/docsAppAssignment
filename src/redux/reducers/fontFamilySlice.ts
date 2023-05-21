// reducers/marginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FontFamily {
  value: string ;
}

const initialState: FontFamily = {
  value: 'Calibri',
};

const fontFamilySlice = createSlice({
  name: 'fontFamily',
  initialState,
  reducers: {
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setFontFamily } = fontFamilySlice.actions;
export default fontFamilySlice.reducer;
