import React from 'react';
import {useSelector} from "./hooks/redux.hooks";
import {getAllCategories} from "./redux/categories/category.slice";
import {getAllNotes} from "./redux/notes/note.slice";
import CategoriesTable from "./components/CategoriesTable";
import NotesTableWithUserControls from "./components/NotesTableWithUserControls";

export default function App() {

  const notes = useSelector(getAllNotes);
  const categories = useSelector(getAllCategories);

  return (
    <div className="flex justify-center">
      <div className="container p-5">
        <NotesTableWithUserControls notes={notes} />
        <CategoriesTable categories={categories} />
      </div>
    </div>
  );
};
