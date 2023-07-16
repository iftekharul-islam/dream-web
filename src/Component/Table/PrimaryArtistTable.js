import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "title",
  },
  {
    title: "Spotify ID",
    dataIndex: "spotify_url",
    render: (data) => {
      return (
        <a href={data} target="_blank">
          {data?.length > 20 ? data?.slice(0, 20) + "..." : data}
        </a>
      );
    },
  },
  {
    title: "Apple ID",
    dataIndex: "apple_url",
    render: (data) => {
      return (
        <a href={data} target="_blank">
          {data?.length > 20 ? data?.slice(0, 20) + "..." : data}
        </a>
      );
    },
  },
  {
    title: "Facebook URL",
    dataIndex: "facebook_url",
    render: (data) => {
      return (
        <a href={data} target="_blank">
          {data?.length > 20 ? data?.slice(0, 20) + "..." : data}
        </a>
      );
    },
  },
  {
    title: "Instagram ID",
    dataIndex: "instagram_url",
    render: (data) => {
      return (
        <a href={data} target="_blank">
          {data?.length > 20 ? data?.slice(0, 20) + "..." : data}
        </a>
      );
    },
  },
  {
    title: "YouTube Channel URL",
    dataIndex: "youtube_url",
    render: (data) => {
      return (
        <a href={data} target="_blank">
          {data?.length > 20 ? data?.slice(0, 20) + "..." : data}
        </a>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "current_status",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const PrimaryArtistTable = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    scroll={{ x: 991 }}
    pagination={{ pageSize: 5 }}
  />
);

export default PrimaryArtistTable;
