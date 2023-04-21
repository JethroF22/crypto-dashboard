import { useTable } from 'react-table';

interface TableProps {
  columns: any[];
  data: any[];
}

export function Table({ columns, data }: TableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={Math.floor(Math.random() * 10000)}
          >
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps()}
                key={Math.floor(Math.random() * 10000)}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          console.log('row');
          console.log(row);
          return (
            <tr {...row.getRowProps()} key={Math.floor(Math.random() * 10000)}>
              {row.cells.map((cell: any) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
