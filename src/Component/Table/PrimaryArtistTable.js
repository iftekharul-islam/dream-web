import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => a.SId - b.SId,
      multiple: 2,
    },
  },
  {
    title: "Name",
    dataIndex: "title",

  },
  {
    title: "Spotify ID",
    dataIndex: "spotify_url",

  },
  {
    title: "Apple ID",
    dataIndex: "apple_url",

  },
  {
    title: "Facebook URL",
    dataIndex: "facebook_url",

  },
  {
    title: "Instagram ID",
    dataIndex: "instagram_url",

  },
  {
    title: "YouTube Channel URL",
    dataIndex: "youtube_url",
  },
  {
    title: "Status",
    dataIndex: "current_status",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const PrimaryArtistTable = ({data}) => (
  <Table columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 991}} pagination={{pageSize: 5}} />
);

export default PrimaryArtistTable;
