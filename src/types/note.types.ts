import {Category} from "./category.types";
import {DATE_REGEX} from "../utils/regular-expressions";

export type Note = {
  id: string,
  name: string,
  content: string,
  category: Category
  dates: string[],
  isArchived: boolean,
  createdAt: number,
};

export class NoteHandler {

  static create(name: string, content: string, category: Category): Note {

    if (!name.trim()) {
      throw new Error('Note name cannot be empty!');
    }

    if (!content.trim()) {
      throw new Error('Note content cannot be empty!');
    }

    return {
      id: crypto.randomUUID(),
      name: name,
      content: content,
      category: category,
      dates: content.match(DATE_REGEX) ?? [],
      isArchived: false,
      createdAt: Date.now(),
    }
  }

  static validate(note: Note): void {
    if (!note.id?.trim()) {
      throw new Error('Note id cannot be empty!');
    }

    if (!note.name?.trim()) {
      throw new Error('Note name cannot be empty!');
    }

    if (!note.content?.trim()) {
      throw new Error('Note content cannot be empty!');
    }

    if (!note.category) {
      throw new Error('Note category cannot be null or undefined!');
    }

    if (!note.dates) {
      throw new Error('Note dates cannot be null or undefined!');
    }

    if (note.isArchived === undefined) {
      throw new Error('Note isArchived cannot be null or undefined!');
    }

    if (!note.createdAt || note.createdAt < 0) {
      throw new Error('Note createdAt cannot be empty or less than 0!');
    }
  }
};