import React, {FC, memo, useState} from "react";
import NotesTable from "./NotesTable";
import ToggleButton from "./ToggleButton";
import {Note} from "../types/note.types";
import CreateNoteForm from "./CreateNoteForm";

type NotesTableWithUserControlsProps = {
  notes: Note[],
};

type NotesTableWithUserControlsState = {
  showArchivedNotes: boolean,
  showCreateNoteForm: boolean,
};

const initialState: NotesTableWithUserControlsState = {
  showArchivedNotes: false,
  showCreateNoteForm: false,
}

const NotesTableWithUserControls: FC<NotesTableWithUserControlsProps> = memo(({ notes }) => {

  const [state, setState] = useState(initialState);

  const handleShowCreateNoteForm = () => {
    setState({ ...state, showCreateNoteForm: true });
  };

  return (
    <>
      {
        state.showCreateNoteForm && <CreateNoteForm onClose={() => setState({ ...state, showCreateNoteForm: false })} />
      }
      <NotesTable notes={state.showArchivedNotes ? notes : notes.filter(note => !note.isArchived)} />
      <div className="flex justify-end py-2">
        <ToggleButton activeValue={'Hide archived notes'}
                      disabledValue={'Show archived notes'}
                      isActive={false}
                      callback={showArchivedNotes => setState({ ...state, showArchivedNotes: showArchivedNotes})}
        />
        <span className="button create-note bg-emerald-500 hover:bg-emerald-400 rounded-md cursor-pointer px-10 py-1 flex text-white font-semibold"
              onClick={() => handleShowCreateNoteForm()}
        >
            Create note
          </span>
      </div>
    </>
  );
});

export default NotesTableWithUserControls;