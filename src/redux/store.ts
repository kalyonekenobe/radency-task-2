import {combineReducers, configureStore} from "@reduxjs/toolkit";
import notesReducer from './notes/note.slice';
import categoriesReducer from './categories/category.slice';

export const store = configureStore({
  reducer: combineReducers({ notes: notesReducer, categories: categoriesReducer }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;