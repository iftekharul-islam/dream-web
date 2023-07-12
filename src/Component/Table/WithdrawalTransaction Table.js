import { Table } from "antd";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
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
  },
  {
    title: "Action",
    dataIndex: "",
    render: (row) => {
      return (
        <span>
          {row?.status == "Approved" ? (
            <Link to={row?.file_download_url} target="_blank">Download</Link>
          ) : (
            "N/A"
          )}
        </span>
      );
    },
  },
];

const WithdrawalTransactionTable = ({data}) => (
  <Table columns={columns} dataSource={data?.data} bordered scroll={{ x: 768}} pagination={{ pageSize: 5 }}/>
);

export default WithdrawalTransactionTable;
