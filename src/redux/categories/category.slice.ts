import {Category, ICategory} from "../../types/category.types";
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

export const getCategoryById = (id: ICategory['id']) => (state: RootState): Category | undefined => {
  return state.categories.find((category: Category) => category.id === id);
};

export const getCategoryByName = (name: ICategory['name']) => (state: RootState): Category | undefined => {
  return state.categories.find((category: Category) => category.name === name);
};

export default categoriesSlice.reducer;