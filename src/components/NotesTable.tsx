import React, {FC, memo, useCallback, useState} from "react";
import {Table} from "../layout/Table";
import {Note} from "../types/note.types";
import {useDispatch} from "../hooks/redux.hooks";
import {removeNote, updateNote} from "../redux/notes/note.slice";
import EditNoteForm from "./EditNoteForm";
import TableButton from "./TableButton";

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
          <TableButton type={'edit'} handleOnClick={() => handleOnClickEditButton(note)}/>
          {
            note.isArchived ?
              <TableButton type={'unarchive'} handleOnClick={() => handleChangeIsArchivedNote(note, false)} />
              :
              <TableButton type={'archive'} handleOnClick={() => handleChangeIsArchivedNote(note, true)} />
          }
          <TableButton type={'remove'} handleOnClick={() => handleRemoveNote(note)} />
        </div>
      </td>
    </tr>
  );
});

export default NotesTable;