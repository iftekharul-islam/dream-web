import { Table } from "antd";
import moment from "moment";
const columns = [
  {
    title: "Date",
    dataIndex: "created_at",
    render: (created_at) => {return moment(created_at).format("DD MMM YYYY")}
  },
  {
    title: "URL",
    dataIndex: "claim_url",
  },
  {
    title: "UPC/EAN",
    dataIndex: "claim_upc",
  },
  {
    title: "Status",
    dataIndex: "current_status",
    render: (current_status) => {
      let color;
      if (current_status === "Pending") {
        color = "orange";
      } else if (current_status === "Approved") {
        color = "green";
      } else if (current_status === "Rejected") {
        color = "red";
      } else {
        color = "black";
      }
      return <span style={{ color }}>{current_status}</span>;
    },
  },
];

const AddClaimReleaseTable = ({data}) => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    scroll={{ x: 768 }}
    pagination={{pageSize: 5}}
  />
);

export default AddClaimReleaseTable;
