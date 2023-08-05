import React, {FC, memo, ReactNode} from "react";

type TableColumn = {
  name: string,
  width?: number
};

type TableProps = {
  columns: TableColumn[],
  children?: ReactNode | ReactNode[],
};

export const Table: FC<TableProps> = memo(({ columns, children }) => {

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b">
        <tr>
          {
            columns.map((column, index) => {

              const bgColorClass = index % 2 === 0 ? `bg-gray-50 dark:bg-gray-800` : ``;
              const widthClass = column.width ? `w-[${column.width}px]` : ``;

              return (
                <th key={crypto.randomUUID()} className={`px-6 py-3 ${bgColorClass} ${widthClass}`}>
                  {column.name}
                </th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
});