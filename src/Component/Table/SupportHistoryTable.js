import { Table } from "antd";
import moment from "moment";
import SupportReplyPopup from "../Modal/SupportReplyPopup";

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
    title: "Status",
    dataIndex: "current_status",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    render: (created_at) => (
      <span>{moment(created_at).format("DD MMM YYYY hh:mm A")}</span>
    ),
  },
  {
    title: "Last Update",
    dataIndex: "updated_at",
    render: (updated_at) => (
      <span>{moment(updated_at).format("DD MMM YYYY hh:mm A")}</span>
    ),
  },
  {
    title: "Action",
    dataIndex: "status",
    render: (status, row) => {
      if(status == 1) return <span>Wait for Admin Reply</span>
      if(status == 2) return <SupportReplyPopup id={row?.id}/>
      if(status == 3) return <span>Conversation is Over</span>
    },
  },
];

const SupportHistoryTable = ({ data }) => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 991 }} />
);

export default SupportHistoryTable;
