import {Note, NoteHandler} from "../types/note.types";
import {Category, CategoryHandler} from "../types/category.types";

let defaultCategories: Category[] = [];
let defaultNotes: Note[] = [];

try {
  defaultCategories = [
    CategoryHandler.create('Task'),
    CategoryHandler.create('Random Thought'),
    CategoryHandler.create('Idea'),
    CategoryHandler.create('Quote'),
  ];

  defaultNotes = [
    NoteHandler.create('Shopping list', 'Tomatoes, bread', defaultCategories[0]),
    NoteHandler.create('The theory of evolution', 'The evolution is the change in heritable characteristics of biological populations over successive generations.', defaultCategories[1]),
    NoteHandler.create('New Feature', 'Implemented new feature on the 3/5/2021, I will send it for test on 5/5/2021', defaultCategories[2]),
    NoteHandler.create('William Gaddis', 'Power doesn\'t corrupt people, people corrupt power.', defaultCategories[3]),
    NoteHandler.create('Books', 'The Lean Startup', defaultCategories[0]),
    NoteHandler.create('Health', 'I’m gonna have a dentist appointment on 08/03/2023', defaultCategories[2]),
    NoteHandler.create('Travelling', 'I would like to move to Norway', defaultCategories[1]),
  ];
} catch (error) {
  alert(`Data initialization error: ${error}`);
}

export { defaultNotes, defaultCategories }