import React, { useEffect, useState } from "react";
import SearchBar from "../Component/SearchBar/SearchBar";
import Selector from "../Component/Selector/Selector";
import AnalyticsTable from "../Component/Table/AnalyticsTable";
import AnalyticsService from "../Service/AnalyticsService";
import OptionService from "../Service/OptionService";

function Analytics() {
  const [uploadData, setUploadData] = useState({ year: "2023" });
  const handleChange = (name, event) => {
    setUploadData({ ...uploadData, [name]: event?.value });
  };

  const handleSubmit = async () => {
    const res = await AnalyticsService.submitReq(uploadData);
    if (res?.status == 201) {
      setUploadData({ type: 1 });
      getData();
    }
  };

  const [data, setData] = useState(null);
  const [params, setParams] = useState();

  const getData = async () => {
    const res = await AnalyticsService.getAllData(params);
    setData(res?.data);
  };

  useEffect(() => {
    getData();
  }, [params]);

  const onSearch = (term) => {
    setParams({ ...params, q: term });
  };

  const [years, setYears] = useState([]);

  useEffect(() => {
    const options = [];
    for (let i = new Date().getFullYear(); i >= 2020; i--) {
      options.push({
        value: i,
        label: i,
      });
    }
    setYears(options);
  }, []);

  const months = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  const [label, setLabel] = useState([]);

  const getOptions = async () => {
    const label = await OptionService.getLabel();
    setLabel(label);
  };
  useEffect(() => {
    getOptions();
  }, []);

  return (
    <>
      <div className="analytics_page">
        <h2 className="mb-3">User Analytics</h2>
        <div className="analytics_area">
          <Selector
            options={years}
            onChange={handleChange}
            placeholder="All Year"
            name="year"
            value={years?.find((item) => item.value == data?.year)}
          />
          <Selector
            options={months}
            onChange={handleChange}
            placeholder="All Months"
            name="month"
            value={months?.find((item) => item.value == data?.month)}
          />
          <Selector
            options={label}
            onChange={handleChange}
            placeholder="All Labels"
            name="label_id"
            value={label?.find((item) => item.value == data?.label_id)}
          />
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="table_content">
          <h2 className="mb-3">User Analytics History</h2>
          <div className="table_title">
            <p>Show 4 entries</p>
            <SearchBar onSearch={onSearch} />
          </div>
          <AnalyticsTable data={data} />
        </div>
      </div>
    </>
  );
}

export default Analytics;
