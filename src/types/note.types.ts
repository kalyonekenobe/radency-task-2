import {Category} from "./category.types";

export type Note = {
  id: string,
  name: string,
  content: string,
  category: Category
  dates: string,
  createdAt: Date
}