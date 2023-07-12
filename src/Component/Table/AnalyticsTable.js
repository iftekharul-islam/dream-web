import { Table } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Years",
    dataIndex: "year",
  },
  {
    title: "Months",
    dataIndex: "month",
  },
  {
    title: "Label",
    dataIndex: "label",
    render: (label) => {
      return <span>{label?.title}</span>;
    },
  },
  {
    title: "Status",
    dataIndex: "current_status",
    render: (current_status) => {
      let color;
      if (current_status == "Pending") {
        color = "orange";
      } else if (current_status == "Approved") {
        color = "green";
      } else if (current_status == "Rejected") {
        color = "red";
      } else {
        color = "black";
      }
      return <span style={{ color }}>{current_status}</span>;
    },
  },
  {
    title: "Action",
    dataIndex: "",
    render: (row) => {
      return (
        <span>
          {row?.status == 2 ? (
            <Link to={row?.file_download_url} target="_blank">Download</Link>
          ) : (
            "N/A"
          )}
        </span>
      );
    },
  },
];

const AnalyticsTable = ({ data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data ?? []}
      scroll={{ x: 768 }}
      bordered
    />
  );
};

export default AnalyticsTable;
