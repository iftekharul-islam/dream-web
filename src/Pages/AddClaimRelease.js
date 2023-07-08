import React, { useEffect, useState } from "react";
import InputField from "../Component/InputField/InputField";
import SearchBar from "../Component/SearchBar/SearchBar";
import AddClaimReleaseTable from "../Component/Table/AddClaimReleaseTable";
import YoutubeService from "../Service/YoutubeService";

function AddClaimRelease() {
  const [uploadData, setUploadData] = useState({ type: 1 });

  const handleChange = (event) => {
    setUploadData({ ...uploadData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const res = await YoutubeService.createClaimRelease(uploadData);
    if (res?.status == 201) {
      setUploadData({ type: 1 });
      getData();
    }
  };

  const [data, setData] = useState([]);
  const [params, setParams] = useState({ type: 1 });

  const getData = async () => {
    const res = await YoutubeService.getAllData(params);
    setData(res?.data);
  };

  useEffect(() => {
    getData();

  }, [params]);

  const onSearch = (term) => {
    setParams({ ...params, q: term });
  };
  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h2>Add Claim Release</h2>
          <p>The benefits of an add claim release</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <InputField
            label="URL"
            star="*"
            type="text"
            value={uploadData?.claim_url}
            name="claim_url"
            onChange={handleChange}
          />
          <InputField
            label="UPC/EAN"
            star="*"
            type="text"
            value={uploadData?.claim_upc}
            name="claim_upc"
            onChange={handleChange}
          />
          <button className="btn mt-4" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="table_content">
        <div className="table_title">
          <p>Show 5 entries</p>
          <SearchBar onSearch={onSearch} placeHolder="Search by UPC/EAN" />
        </div>
        <AddClaimReleaseTable data={data} />
      </div>
    </div>
  );
}

export default AddClaimRelease;
