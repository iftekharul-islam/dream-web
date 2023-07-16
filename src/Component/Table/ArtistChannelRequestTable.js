import { Table } from "antd";
import moment from "moment";
const columns = [
  {
    title: "Date",
    dataIndex: "created_at",
    render: (created_at) => {return moment(created_at).format("DD MMM YYYY")}
  },
  {
    title: "Channel Link",
    dataIndex: "artist_channel_link",
    render: (data) => {
      return (
        <a href={data} target="_blank">
          {data?.length > 30 ? data?.slice(0, 30) + "..." : data}
        </a>
      );
    },
  },
  {
    title: "Topic Link",
    dataIndex: "artist_topic_link",
    render: (data) => {
      return (
        <a href={data} target="_blank">
          {data?.length > 30 ? data?.slice(0, 30) + "..." : data}
        </a>
      );
    },
  },
  {
    title: "UPC/EAN1",
    dataIndex: "artist_upc1",
  },
  {
    title: "UPC/EAN2",
    dataIndex: "artist_upc2",
  },
  {
    title: "UPC/EAN3",
    dataIndex: "artist_upc3",
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

const ArtistChannelRequestTable = ({data}) => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 768}} pagination={{ pageSize: 5 }}/>
);

export default ArtistChannelRequestTable
