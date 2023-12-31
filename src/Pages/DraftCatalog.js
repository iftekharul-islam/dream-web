import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DraftCardList from "../Component/CatalogsCard/DraftCardList";
import PaginationList from "../Component/Pagination/PaginationList";
import SearchBar from "../Component/SearchBar/SearchBar";
import AudioService from "../Service/AudioService";

function DraftCatalog() {
  const [params, setParams] = useState({
    page: 1,
    perPage: 4,
    q: "",
    status: 4,
  });
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await AudioService.getAllData(params);
    if(res){
      setData(res);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  const onChange = (e) => {
    setParams({...params, page: e})
  };

  const onSearch = (term) =>{
    setParams({...params, q: term})
  }
  return (
    <div className="draft_page">
      <div className="section_title">
        <div className="text_area">
          <h2>Draft Catalogs</h2>
          <p>Exploring our collections</p>
        </div>
        <div className="btn_area">
        <Link className="btn" to="/release-audio">Create Release</Link>
        </div>
      </div>
      <div className="mt-5">
        <div className="table_title">
        <p>Show {data?.from} to {data?.to} of {data?.total} entries</p>
          <SearchBar onSearch={onSearch} />
        </div>
        <DraftCardList cardData={data?.data ?? []} />
        <div className="mt-5">
        <PaginationList onChange={onChange} total={data?.total} current={data?.current_page} />
        </div>
      </div>
    </div>
  );
}

export default DraftCatalog;
