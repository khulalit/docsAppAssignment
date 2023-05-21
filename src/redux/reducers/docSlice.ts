// reducers/marginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DocState {
  value: string ;
}

const initialState: DocState = {
  value: '',
};

const docSlice = createSlice({
  name: 'doc',
  initialState,
  reducers: {
    setDoc: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setDoc } = docSlice.actions;
export default docSlice.reducer;
