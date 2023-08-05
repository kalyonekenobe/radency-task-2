import {Category} from "../../types/category.types";
import {RootState} from "../store";
import {createSlice} from "@reduxjs/toolkit";
import {defaultCategories} from "../../utils/mock-data";

const initialState: Category[] = [ ...defaultCategories ];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: { }
});

export const getAllCategories = (state: RootState): Category[] => {
  return state.categories;
};

export const getCategoryById = (id: Category['id']) => (state: RootState): Category | undefined => {
  return state.categories.find(category => category.id === id);
};

export const getCategoryByName = (name: Category['name']) => (state: RootState): Category | undefined => {
  return state.categories.find(category => category.name === name);
};

export default categoriesSlice.reducer;