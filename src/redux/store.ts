// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import marginReducer from './reducers/marginSlice';
import fileNameReducer from './reducers/fileNameSlice';
import fontReducer from './reducers/fontFamilySlice';
import docReducer from './reducers/docSlice';

const store = configureStore({
  reducer: {
    margin: marginReducer,
    fileName: fileNameReducer,
    fontFamily: fontReducer,
    doc: docReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
