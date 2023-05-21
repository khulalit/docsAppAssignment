// actions.js
import { SET_MARGIN, SET_FILENAME, SET_FONTFAMILY, SET_DOC } from './actionTypes';

export const setMargin = (margin:Number|String) => ({
  type: SET_MARGIN,
  payload: margin,
});

export const setFileName = (file:string) => ({
  type: SET_FILENAME,
  payload: file,
});

export const setFontFamily = (font:string) => ({
    type: SET_FONTFAMILY,
    payload: font,
});

export const setDoc = (doc:string) => ({
    type: SET_DOC,
    payload: doc,
});