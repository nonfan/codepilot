interface Column {
  title: string;
  dataIndex: string;
  width?: number;
  render?: (data: any) => any;
}

interface DataSource {
  [name: string]: any;
}

const columns: Column[] = [
  {
    title: "halo",
    dataIndex: "name",
    render: (data) => {
      return <code>{data}</code>;
    },
  },
  {
    title: "halo",
    dataIndex: "age",
  },
  {
    title: "halo",
    dataIndex: "address",
  },
];

const dataSource: DataSource[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
import "./index.scss";
function DocTableList() {
  const renderColumn = (column, rowData) => {
    if (column.render) {
      return column.render(rowData[column.dataIndex]);
    }
    return rowData[column.dataIndex];
  };

  return (
    <div className="doc-table-list">
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.dataIndex}>{column.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, key: number) => {
            return (
              <tr key={key}>
                {columns.map((column) => {
                  return (
                    <td key={column.dataIndex}>{renderColumn(column, data)}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DocTableList;
