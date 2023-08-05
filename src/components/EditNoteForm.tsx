import {FC, FormEvent, memo, useState} from "react";
import {useDispatch, useSelector} from "../hooks/redux.hooks";
import {getAllCategories} from "../redux/categories/category.slice";
import {NoteHandler} from "../types/note.types";
import {updateNote} from "../redux/notes/note.slice";
import {Category} from "../types/category.types";
import {Note} from "../types/note.types";

type EditNoteFormProps = {
  note: Note,
  onClose: () => any,
};

type EditNoteFormFields = {
  name: string,
  content: string,
  categoryId: string,
};

type EditNoteFormState = {
  note: EditNoteFormFields,
  errors: string[],
};

const initialState: EditNoteFormState = {
  note: {
    name: '',
    content: '',
    categoryId: '',
  },
  errors: [],
};

const EditNoteForm: FC<EditNoteFormProps> = memo(({ note, onClose }) => {

  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const [state, setState] = useState({
    ...initialState,
    note: {
      ...initialState.note,
      name: note.name,
      content: note.content,
      categoryId: note.category.id,
    },
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    let errors: string[] = [];
    const { name, content, categoryId } = state.note;
    const category: Category | undefined = categories.find(category => category.id === categoryId);

    if (name === '') {
      errors = [ ...errors, 'Note name cannot be empty!' ];
    }

    if (content === '') {
      errors = [ ...errors, 'Note content cannot be empty!' ];
    }

    if (!category) {
      errors = [ ...errors, 'Note category cannot be undefined!' ];
    }

    if (!errors.length) {
      try {
        const updatedNote = NoteHandler.normalize({ ...note, name, content, category: category as Category });
        dispatch(updateNote(updatedNote));
        onClose();
      } catch (error) {
        errors = [ ...errors, 'Note updating error!' ];
      }
    }

    setState({ ...state, errors: errors });
  };

  return (
    <div className="relative z-10 edit-note-form-container"
         aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <form className="edit-note-form" onSubmit={event => handleSubmit(event)}>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  {
                    state.errors.length > 0 &&
                    <div className="errors-container mb-5">
                      {
                        state.errors.map(error => (
                          <span className="error border rounded-sm text-sm border-red-100 flex mb-0.5 text-red-500 px-2 py-0.5"
                                key={crypto.randomUUID()}
                          >
                            {error}
                          </span>
                        ))
                      }
                    </div>
                  }
                  <h3 className="text-base font-semibold leading-6 text-gray-900 text-xl mb-5" id="modal-title">Edit note</h3>
                  <div className="mb-2">
                    <label htmlFor="name" className="text-slate-500 text-sm">Name: </label>
                    <input type="text" name="name" id="name"
                           className="w-full border rounded-md mt-1 px-2 py-1 outline-none"
                           defaultValue={state.note.name}
                           onChange={event => setState({ ...state, note: { ...state.note, name: event.target.value }})}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="content" className="text-slate-500 text-sm">Content: </label>
                    <textarea name="content" id="content"
                              className="w-full border rounded-md mt-1 px-2 py-1 outline-none min-h-[100px]"
                              defaultValue={state.note.content}
                              onChange={event => setState({ ...state, note: { ...state.note, content: event.target.value }})}
                    />
                  </div>
                  <div>
                    <label htmlFor="content" className="text-slate-500 text-sm">Category: </label>
                    <select className="w-full border rounded-md mt-1 px-2 py-1 outline-none" name="category"
                            id="category" value={state.note.categoryId}
                            onChange={event => setState({ ...state, note: { ...state.note, categoryId: event.target.value }})}
                    >
                      {
                        categories.map(category => (
                          <option value={category.id} key={crypto.randomUUID()}>
                            {category.name}
                          </option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="submit"
                        className="outline-none inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 sm:ml-3 sm:w-auto"
                >
                  Save
                </button>
                <button type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => onClose()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EditNoteForm;