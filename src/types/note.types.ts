import {Category} from "./category.types";
import {DATE_REGEX} from "../utils/regular-expressions";

export interface INote {
  id: string,
  name: string,
  content: string,
  category: Category
  dates: string[],
  createdAt: number,
  validate(): void,
};

export class Note implements INote {

  id: string;
  name: string;
  content: string;
  category: Category;
  dates: string[];
  createdAt: number;

  constructor(name: string, content: string, category: Category) {

    if (!name.trim()) {
      throw new Error('Note name cannot be empty!');
    }

    if (!content.trim()) {
      throw new Error('Note content cannot be empty!');
    }

    this.id = crypto.randomUUID();
    this.name = name;
    this.content = content;
    this.category = category;
    this.dates = content.match(DATE_REGEX) ?? [];
    this.createdAt = Date.now();
  }

  validate(): void {

    if (!this.id?.trim()) {
      throw new Error('Note id cannot be empty!');
    }

    if (!this.name?.trim()) {
      throw new Error('Note name cannot be empty!');
    }

    if (!this.content?.trim()) {
      throw new Error('Note content cannot be empty!');
    }

    if (!this.category) {
      throw new Error('Note category cannot be null or undefined!');
    }

    if (!this.dates) {
      throw new Error('Note dates cannot be null or undefined!');
    }

    if (!this.createdAt || this.createdAt < 0) {
      throw new Error('Note createdAt cannot be empty or less than 0!');
    }
  }
};