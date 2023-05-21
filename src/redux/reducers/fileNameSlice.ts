// reducers/marginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FileNameState {
  value: string ;
}

const initialState: FileNameState = {
  value: 'Untitled Document',
};

const fileNameSlice = createSlice({
  name: 'fileName',
  initialState,
  reducers: {
    setFileName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setFileName } = fileNameSlice.actions;
export default fileNameSlice.reducer;
