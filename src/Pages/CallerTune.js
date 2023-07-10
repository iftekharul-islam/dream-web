import React, { useEffect, useState } from 'react';
import SearchBar from "../Component/SearchBar/SearchBar";
import CallerTuneTable from "../Component/Table/CallerTuneTable";
import CallerTuneService from '../Service/CallerTuneService';

function CallerTune() {
  const [params, setParams] = useState({
    page: 1,
    perPage: 10,
    q: "",
  });
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await CallerTuneService.getAllData(params);
    if(res){
      setData(res);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  const onSearch = (term) =>{
    setParams({...params, q: term})
  }
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
          <SearchBar onSearch={onSearch}/>
        </div>
        <CallerTuneTable data={data}/>
      </div>
    </>
  )
}

export default CallerTune
