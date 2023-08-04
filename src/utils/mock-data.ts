import {Note} from "../types/note.types";
import {Category} from "../types/category.types";

export const defaultCategories: Category[] = [
  new Category('Task'),
  new Category('Random Thought'),
  new Category('Idea'),
  new Category('Quote'),
];

export const defaultNotes: Note[] = [
  new Note('Shopping list', 'Tomatoes, bread', defaultCategories[0]),
  new Note('The theory of evolution', 'The evolution is the change in heritable characteristics of biological populations over successive generations.', defaultCategories[1]),
  new Note('New Feature', 'Implemented new feature on the 3/5/2021, I will send it for test on 5/5/2021', defaultCategories[2]),
  new Note('William Gaddis', 'Power doesn\'t corrupt people, people corrupt power.', defaultCategories[3]),
  new Note('Books', 'The Lean Startup', defaultCategories[0]),
  new Note('Health', 'I’m gonna have a dentist appointment on 08/03/2023', defaultCategories[2]),
  new Note('Travelling', 'I would like to move to Norway', defaultCategories[1]),
];