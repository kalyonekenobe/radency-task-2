import {FC, FormEvent, memo, useState} from "react";
import {useDispatch, useSelector} from "../hooks/redux.hooks";
import {getAllCategories} from "../redux/categories/category.slice";
import {NoteHandler} from "../types/note.types";
import {createNote} from "../redux/notes/note.slice";
import {Category} from "../types/category.types";
import Form from "../layout/Form";
import {InputWithLabel, SelectWithLabel, TextareaWithLabel} from "./FormControls";
import ModalWrapper from "../layout/ModalWrapper";

type CreateNoteFormProps = {
  onClose: () => any,
};

type CreateNoteFormFields = {
  name: string,
  content: string,
  categoryId: string,
};

type CreateNoteFormState = {
  note: CreateNoteFormFields,
  errors: string[],
};

const initialState: CreateNoteFormState = {
  note: {
    name: '',
    content: '',
    categoryId: '',
  },
  errors: [],
};

const CreateNoteForm: FC<CreateNoteFormProps> = memo(({ onClose }) => {

  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const [state, setState] = useState({
    ...initialState,
    note: {
      ...initialState.note,
      categoryId: categories[0]?.id ?? '',
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
        const note = NoteHandler.create(name, content, category as Category);
        dispatch(createNote(note));
        onClose();
      } catch (error) {
        errors = [ ...errors, 'Note creation error!' ];
      }
    }

    setState({ ...state, errors: errors });
  };

  return (
    <ModalWrapper>
      <Form header={'Create note'} errors={state.errors} buttons={[
        { type: 'cancel', handleOnClick: () => onClose(), theme: 'white', value: 'Cancel' },
        { type: 'submit', handleOnClick: event => handleSubmit(event), theme: 'emerald', value: 'Create' },
      ]}>
        <div className="mb-2">
          <InputWithLabel defaultValue={state.note.name}
                          label={'Name: '}
                          onChange={event => setState({ ...state, note: { ...state.note, name: event.target.value }})}
          />
        </div>
        <div className="mb-2">
          <TextareaWithLabel defaultValue={state.note.content}
                             label={'Content: '}
                             onChange={event => setState({ ...state, note: { ...state.note, content: event.target.value }})}
          />
        </div>
        <div>
          <SelectWithLabel value={state.note.categoryId}
                           label={'Category: '}
                           onChange={event => setState({ ...state, note: { ...state.note, categoryId: event.target.value }})}
                           options={categories.map(category => ({ value: category.id, text: category.name }))}
          />
        </div>
      </Form>
    </ModalWrapper>
  );
});

export default CreateNoteForm;