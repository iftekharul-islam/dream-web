import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Youtube Link",
    dataIndex: "youtube_url",
  },
  {
    title: "Status",
    dataIndex: "current_status",
    sorter: {
      compare: (a, b) => a.status - b.status,
      multiple: 1,
    },
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const PrimaryArtistTable = ({ data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      scroll={{ x: 991 }}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default PrimaryArtistTable;
