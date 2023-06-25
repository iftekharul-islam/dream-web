import React from 'react';
import SearchBar from "../Component/SearchBar/SearchBar";
import CallerTuneTable from "../Component/Table/CallerTuneTable";

function CallerTune() {
  // const [params, setParams] = useState({
  //   page: 1,
  //   perPage: 4,
  //   q: "",
  //   status: 3,
  // });
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const res = await AudioService.getAllData(params);
  //   if(res){
  //     setData(res);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [params]);

  // // const onShowSizeChange = (current, pageSize) => {
  // //   setParams({...params, perPage: pageSize})
  // //   console.log("🚀 ~ file: ApprovedCatalog.js:29 ~ onShowSizeChange ~ pageSize:", pageSize)
  // // };

  // const onChange = (e) => {
  //   setParams({...params, page: e})
  // };

  // const onSearch = (term) =>{
  //   setParams({...params, q: term})
  // }
  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Caller Tune</h1>
        </div>
          </div>
          <div className="table_content">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar/>
        </div>
        <CallerTuneTable />
      </div>
    </>
  )
}

export default CallerTune
