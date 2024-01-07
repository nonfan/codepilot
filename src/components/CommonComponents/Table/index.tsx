// TablePanel.jsx
import React from "react";

export function TablePanel(props) {
  const { dataSource, columns, rowKey } = props;
  return (
    <div style={{}}>
      <h3>表格</h3>
      <table width="100%" cellSpacing="0" cellPadding="0" align="center">
        <tr>
          {columns.map((item) => {
            return <th key={item.key}>{item.title}</th>;
          })}
        </tr>
        {dataSource.map((data) => {
          return (
            <tr key={data.key}>
              {columns.map((item) => {
                const key = item[rowKey];
                if (item.render) {
                  return (
                    <td key={key}>{item.render(data[item.dataIndex], data)}</td>
                  );
                }
                return <td key={item.key}>{data[item.dataIndex]}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

//APP.jsx
export default class TableList extends React.Component {
  render() {
    // 使用的是antd中所传数据格式
    const dataSource = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园2号",
      },
      {
        key: "3",
        name: "胡彦文",
        age: 52,
        address: "西湖区湖底公园3号",
      },
      {
        key: "4",
        name: "胡彦武",
        age: 62,
        address: "西湖区湖底公园4号",
      },
    ];

    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        render: (name, item) => {
          return <p>{name + item.age}</p>;
        },
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address",
      },
    ];

    return (
      <TablePanel rowKey={"key"} dataSource={dataSource} columns={columns} />
    );
  }
}
