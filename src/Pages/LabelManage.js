import React, { useEffect, useState } from "react";
import LabelManagePopup from "../Component/Modal/LabelManagePopup";
import SearchBar from "../Component/SearchBar/SearchBar";
import LabelManageTable from "../Component/Table/LabelManageTable";
import LabelService from "../Service/LabelService";

function LabelManage() {
  const [data, setData] = useState([]); 
  console.log("🚀 ~ file: LabelManage.js:9 ~ LabelManage ~ data:", data)
  const [params, setParams] = useState(null);

  const getData = async() => {
    const res = await LabelService.getAllData(params);
    setData(res?.data);
  }

  useEffect(() => {
    getData();
  }, [params]);

  const onSearch = (term) => {
    setParams({ q: term });
  };

  return (
    <div className="label_manage">
      <div className="section_title">
        <div className="text_area">
          <h1>Label Manage</h1>
        </div>
      </div>
      <LabelManagePopup getData={getData} />
      <div className="table_content mt-3">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar onSearch={onSearch} />
        </div>
        <LabelManageTable data={data} />
      </div>
    </div>
  );
}

export default LabelManage;
