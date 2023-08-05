import React, {FC, memo, useCallback, useState} from "react";
import {Table} from "../layout/Table";
import {Note} from "../types/note.types";
import {useDispatch} from "../hooks/redux.hooks";
import {removeNote, updateNote} from "../redux/notes/note.slice";
import EditNoteForm from "./EditNoteForm";

type NotesTableProps = {
  notes: Note[],
};

type NotesTableState = {
  showEditNoteForm: boolean,
  editedNote?: Note
};

type NotesTableRowProps = {
  note: Note,
  handleOnClickEditButton: (note: Note) => any,
};

const initialState: NotesTableState = {
  showEditNoteForm: false,
};

const NotesTable: FC<NotesTableProps> = memo(({ notes }) => {

  const [state, setState] = useState(initialState);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg border border-slate-200 notes-table">
      {
        state.showEditNoteForm && state.editedNote &&
        <EditNoteForm note={state.editedNote} onClose={() => setState({ ...state, showEditNoteForm: false })} />
      }
      <Table columns={[
          { name: 'Name', width: 250, },
          { name: 'Created', },
          { name: 'Category', },
          { name: 'Content', width: 500, },
          { name: 'Dates', width: 200, },
          { name: 'Actions', width: 150, },
      ]}>
        {
          notes.map(note => (
            <NotesTableRow note={note}
                           handleOnClickEditButton={note => setState({
                             ...state,
                             editedNote: note,
                             showEditNoteForm: true
                           })}
                           key={crypto.randomUUID()}
            />
          ))
        }
      </Table>
    </div>
  );
});

const NotesTableRow: FC<NotesTableRowProps> = memo(({ note, handleOnClickEditButton }) => {

  const dispatch = useDispatch();

  const handleRemoveNote = useCallback((note: Note) => {
    try {
      dispatch(removeNote(note));
    } catch (error) {
      alert(`Note removal error: ${error}`);
    }
  }, [dispatch]);

  const handleChangeIsArchivedNote = useCallback((note: Note, isArchived: boolean) => {
    try {
      dispatch(updateNote({ ...note, isArchived }));
    } catch (error) {
      alert(`Note updating error: ${error}`);
    }
  }, [dispatch]);

  return (
    <tr className={`hover:cursor-pointer group group/note vertical-center ${note.isArchived ? `archived` : ``} `}>
      <th scope="row"
          className="group-hover/note:text-emerald-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 group-[.archived]:bg-emerald-100"
      >
        {note.name}
        {
          note.isArchived &&
          <span className="bg-emerald-500 rounded-md ms-1 px-1 py-0.5 text-white text-xs content-box">
            Archived
          </span>
        }
      </th>
      <td className="px-6 py-4 group-hover/note:text-emerald-500 group-[.archived]:bg-emerald-50">
        {
          new Date(note.createdAt).toLocaleDateString('en', {
            month: "long",
            day: "2-digit",
            year: "numeric"
          })
        }
      </td>
      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 group-hover/note:text-emerald-500 group-[.archived]:bg-emerald-100">
        {note.category.name}
      </td>
      <td className="px-6 py-4 group-hover/note:text-emerald-500 group-[.archived]:bg-emerald-50">
        {note.content}
      </td>
      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 group-hover/note:text-emerald-500 group-[.archived]:bg-emerald-100">
        {note.dates.length > 0 ? note.dates.join(', ') : '—'}
      </td>
      <td className="px-6 py-4 group-[.archived]:bg-emerald-50">
        <div className="flex w-full h-full justify-around align-stretch">
          <span className="button hover:text-yellow-500 edit-note" onClick={() => handleOnClickEditButton(note)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
            </svg>
          </span>
          {
            note.isArchived ?
              <span className="button hover:text-indigo-500 unarchive-note" onClick={() => handleChangeIsArchivedNote(note, false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </span>
              :
              <span className="button hover:text-indigo-500 archive-note" onClick={() => handleChangeIsArchivedNote(note, true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </span>
          }
          <span className="button hover:text-red-500 remove-note" onClick={() => handleRemoveNote(note)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
            </svg>
          </span>
        </div>
      </td>
    </tr>
  );
});

export default NotesTable;