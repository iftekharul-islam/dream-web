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
  // {
  //   title: "Action",
  //   // dataIndex: "status",
  //   render: () => <Link to="/action_primary_artist">action</Link>,
  // },
];
// const data = [
//   {
//     key: "1",
//     id: "01",
//     name: "Title Here",
//     status: "New Label",
//   },
//   {
//     key: "2",
//     id: "02",
//     name: "Title Here",
//     status: "Approved",
//   },
//   {
//     key: "3",
//     id: "03",
//     name: "Title Here",
//     status: "Rejected",
//   }
// ];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const PrimaryArtistTable = ({data}) => {
  return (<Table
    	columns={columns}
    	dataSource={data}
    	onChange={onChange}
    	scroll={{ x: 991 }}
      pagination={{ pageSize: 5 }}
  	/>
	);
}

export default PrimaryArtistTable;
