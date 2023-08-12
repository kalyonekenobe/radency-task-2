import {Meta, StoryObj} from "@storybook/react";
import CategoriesTable from "../components/CategoriesTable";
import {Provider} from "react-redux";
import {CSSProperties} from "react";
import {store} from "../redux/store";

const meta: Meta<typeof CategoriesTable> = {
  title: "App/CategoriesTable",
  component: CategoriesTable,
  tags: ["autodocs"],
};

export default meta;

function withWrapper(style: CSSProperties) {
  return (children: any) => <Provider store={store}>{children()}</Provider>;
}

const categories = store.getState().categories;

export const DefaultCategoriesTable: StoryObj<typeof CategoriesTable> = {
  decorators: [
    withWrapper({})
  ],
  args: {
    categories: categories
  }
};