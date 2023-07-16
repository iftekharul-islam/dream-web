import { Table } from "antd";
import moment from "moment";
const columns = [
  {
    title: "Issue Date",
    dataIndex: "created_at",
    render: (date) => moment(date).format("DD-MM-YYYY"),
  },
  {
    title: "Year",
    dataIndex: "for_year",
  },
  {
    title: "Month",
    dataIndex: "for_month",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
];

const EarningHistoryTable = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data?.data}
    bordered
    scroll={{ x: 768 }}
    pagination={{ pageSize: 5 }}
  />
);

export default EarningHistoryTable;
