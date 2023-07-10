import { Table } from "antd";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Month",
    dataIndex: "for",
  },
  {
    title: "Amount",
    dataIndex: "amount"
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      let color;
      if (status === "Pending") {
        color = "orange";
      } else if (status === "Approved") {
        color = "green";
      } else if (status === "Failed") {
        color = "red";
      } else {
        color = "black";
      }
      return <span style={{ color }}>{status}</span>;
    },
  }
];

const EarningHistoryTable = ({data}) => (
  <Table columns={columns} dataSource={data?.data} bordered scroll={{ x: 768}} pagination={{ pageSize: 5 }}/>
);

export default EarningHistoryTable;
