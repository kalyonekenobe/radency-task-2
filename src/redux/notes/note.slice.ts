import {Note, NoteHandler} from "../../types/note.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {defaultNotes} from "../../utils/mock-data";

type NotesState = {
  notes: Note[],
  errors: Error[],
};

const initialState: NotesState = {
  notes: [ ...defaultNotes ],
  errors: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<Note>) => {
      try {
        const note = action.payload;
        NoteHandler.validate(note);

        return { ...state, notes: [ ...state.notes, note ], errors: [] };
      } catch (error: any) {
        return { ...state, errors: [ error ] };
      }
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      try {
        const note = action.payload;
        const noteInStorage = state.notes.find(storageNote => storageNote.id === note.id);

        NoteHandler.validate(note);

        if (!noteInStorage) {
          throw new Error('Cannot find note with such id!');
        }

        return {
          ...state,
          notes: state.notes.map(storageNote => storageNote.id === note.id ? note : storageNote),
          errors: []
        };
      } catch (error: any) {
        return { ...state, errors: [ error ] };
      }
    },
    removeNote: (state, action: PayloadAction<Note>) => {
      return removeNoteByIdReducer(state, action.payload.id);
    },
    removeNoteById: (state, action: PayloadAction<string>) => {
      return removeNoteByIdReducer(state, action.payload);
    }
  },
});

const removeNoteByIdReducer = (state: NotesState, id: string) => {
  try {
    const noteInStorage = state.notes.find(storageNote => storageNote.id === id);

    if (!noteInStorage) {
      throw new Error('Cannot find note with such id!');
    }

    return {
      ...state,
      notes: state.notes.filter(storageNote => storageNote.id !== id),
      errors: []
    }
  } catch (error: any) {
    return { ...state, errors: [ error ] };
  }
};

export const getAllNotes = (state: RootState): Note[] => {
  return state.notes.notes;
};

export const getNoteById = (id: Note['id']) => (state: RootState): Note | undefined => {
  return state.notes.notes.find(note => note.id === id);
};

export const { createNote, updateNote, removeNote, removeNoteById } = notesSlice.actions;

export default notesSlice.reducer;