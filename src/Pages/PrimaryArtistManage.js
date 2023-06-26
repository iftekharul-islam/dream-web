import React, { useEffect, useState } from "react";
import ArtistManagePopup from "../Component/Modal/ArtistManagePopup";
import SearchBar from "../Component/SearchBar/SearchBar";
import PrimaryArtistTable from "../Component/Table/PrimaryArtistTable";
import ArtistService from "../Service/ArtistService";

function PrimaryArtistManage() {
  const [data, setData] = useState([]); 
  const [params, setParams] = useState(null);

  const getData = async() => {
    const res = await ArtistService.getAllData(params);
    setData(res?.data);
  }

  useEffect(() => {
    getData();
  }, [params]);

  const onSearch = (term) => {
    setParams({ q: term });
  };
  
  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h1>Primary Artist</h1>
          <p>A primary artist is the main or lead artist</p>
        </div>
      </div>
      <ArtistManagePopup getData={getData} />
      <div className="table_content">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar onSearch={onSearch} />
        </div>
        <PrimaryArtistTable data={data} />
      </div>
    </div>
  );
}

export default PrimaryArtistManage;
