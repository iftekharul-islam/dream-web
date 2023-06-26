import React, { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import InputField from "../Component/InputField/InputField";
import SearchBar from "../Component/SearchBar/SearchBar";
import SupportHistoryTable from "../Component/Table/SupportHistoryTable";
import SupportService from "../Service/SupportService";

function SupportCenter() {
  const [uploadData, setUploadData] = useState(null);
  console.log("🚀 ~ file: SupportCenter.js:11 ~ SupportCenter ~ uploadData:", uploadData)
  
  const handleChange = (event) => {
    setUploadData({...uploadData, [event?.target?.name] : event?.target?.value});
  };

  const handleSubmit = async() => {
    const res = await SupportService.createTicket(uploadData);
    if (res?.status == 201) {
      setUploadData(null);
      getData();
    }
  }
  
  const [data, setData] = useState([]); 
  const [params, setParams] = useState(null);

  const getData = async() => {
    const res = await SupportService.getAllData(params);
    setData(res?.data);
  }

  useEffect(() => {
    getData();
  }, [params]);

  const onSearch = (term) => {
    setParams({ ...params, q: term });
  };

  return (
    <div className="support_page">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="s_problem_box">
            <h2>Let me know your problem</h2>
            <div>
              <InputField
                label="Title"
                star="*"
                type="text"
                value={uploadData?.title}
                name="title"
                onChange={handleChange}
              />
              <InputField
                label="Messages"
                star="*"
                type="textarea"
                value={uploadData?.message}
                name="message"
                onChange={handleChange}
              />
              <div className="support_file mt-3">
              {/* <UploadButton /> */}
              </div>
              <button className="btn mt-3" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="connect_wp">
          <IoLogoWhatsapp className="icons" />
          <p>Live WhatsApp Support</p>
          <a className="btn" href="https://wa.me/01677756337" target="_blank">Chet Now</a>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 p-0">
          <div className="s_history">
            <h2>History</h2>
            <div className="table_content mt-3">
              <div className="table_title">
                <p>Show 5 entries</p>
                <SearchBar onSearch={onSearch} placeHolder="Search by Title" />
              </div>
              <SupportHistoryTable data={data}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportCenter;
