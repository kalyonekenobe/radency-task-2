import {Meta, StoryObj} from "@storybook/react";
import {Table} from "../layout/Table";
import React from "react";

const meta: Meta<typeof Table> = {
  title: "App/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

const defaultTableContent = [
  { firstName: 'Alex', lastName: 'Smith', age: '18' },
  { firstName: 'Anna', lastName: 'Bell', age: '23' },
  { firstName: 'Anton', lastName: 'Fikalis', age: '45' },
];

export const DefaultTable: StoryObj<typeof Table> = {
  args: {
    columns: [
      { name: 'First name' },
      { name: 'Last name'},
      { name: 'Age' },
    ],
    children: defaultTableContent.map(item => (
      <tr className="hover:cursor-pointer group/category">
        <th scope="row"
            className="group-hover/category:text-emerald-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
          {item.firstName}
        </th>
        <td className="px-6 py-4 group-hover/category:text-emerald-500">
          {item.lastName}
        </td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 group-hover/category:text-emerald-500">
          {item.age}
        </td>
      </tr>
    ))
  },
};