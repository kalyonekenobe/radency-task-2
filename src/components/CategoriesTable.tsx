import React, {FC, memo} from "react";
import {Category} from "../types/category.types";
import {Table} from "../layout/Table";
import {useSelector} from "../hooks/redux.hooks";
import {getAllNotes} from "../redux/notes/note.slice";

type CategoriesTableProps = {
  categories: Category[],
};

type CategoriesTableRowProps = {
  category: Category
};

const CategoriesTable: FC<CategoriesTableProps> = memo(({ categories }) => {

  const notes = useSelector(getAllNotes);
  const extendedCategories: Category[] = structuredClone(categories).map((category: Category) => {
    category.notes = notes.filter(note => note.category.id === category.id);
    return category;
  });

  return (
    <div className="relative overflow-x-auto sm:rounded-lg border border-slate-200 categories-table">
      <Table columns={[
        { name: 'Note category' },
        { name: 'Active'},
        { name: 'Archived' },
      ]}>
        {
          extendedCategories.map(category => (
            <CategoriesTableRow category={category} key={crypto.randomUUID()} />
          ))
        }
      </Table>
    </div>
  );
});

const CategoriesTableRow: FC<CategoriesTableRowProps> = memo(({ category }) => {

  return (
    <tr className="hover:cursor-pointer group/category">
      <th scope="row"
          className="group-hover/category:text-emerald-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        {category.name}
      </th>
      <td className="px-6 py-4 group-hover/category:text-emerald-500">
        {category.notes.filter(note => !note.isArchived).length}
      </td>
      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 group-hover/category:text-emerald-500">
        {category.notes.filter(note => note.isArchived).length}
      </td>
    </tr>
  );
});

export default CategoriesTable;