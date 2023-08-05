import {Note} from "./note.types";

export interface Category {
  id: string,
  name: string,
  notes: Note[],
};

export class CategoryHandler {

  static create(name: string): Category {

    if (!name.trim()) {
      throw new Error('Category name cannot be empty!');
    }

    return {
      id: crypto.randomUUID(),
      name: name,
      notes: [],
    };
  }

  static validate(category: Category): void {

    if (!category.id?.trim()) {
      throw new Error('Category id cannot be empty!');
    }

    if (!category.name?.trim()) {
      throw new Error('Category name cannot be empty!');
    }
  }
};