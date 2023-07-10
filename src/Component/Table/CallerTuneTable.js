import { Table } from "antd";
const columns = [
  {
    title: "Title",
    dataIndex: "audio",
    render: (audio) => {
      return (
        <div className="c_tune_table_title">
          <img
            src={audio?.images?.image_download_url}
            alt=""
            className="table_img"
          />
          <span>
            {audio?.title}
            <br /> By {audio?.artists[0]?.artist?.title}
          </span>
        </div>
      );
    },
  },
  {
    title: "Label",
    dataIndex: "audio",
    render: (audio) => {
      return <span>{audio?.label?.title}</span>;
    },
  },
  {
    title: "Upc/Catalogue Number",
    dataIndex: "audio",
    render: (audio) => {
      return (
        <span>
          UPC: {audio?.upc} <br /> CAT#: {audio?.producer_catalogue_number}
        </span>
      );
    },
  },
  {
    title: "Stores",
    dataIndex: "crbts",
    render: (crbts) => {
      return (
        <div className="sim_icons">
          {crbts?.map((crbt, index) => (
            <img src={crbt?.icon} alt="" key={index} height="40px" width="40px"/>
          ))}
        </div>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "is_requested",
    render: (is_requested) => {
      let color;
      if (is_requested) {
        color = "green";
      } else {
        color = "orange";
      }
      return (
        <span style={{ color }}>{is_requested ? "Approved" : "Pending"}</span>
      );
    },
  },
];

const CallerTuneTable = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data?.data}
    bordered
    scroll={{ x: 768 }}
    pagination={{ pageSize: 5 }}
  />
);

export default CallerTuneTable;
