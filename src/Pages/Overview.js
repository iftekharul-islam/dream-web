import React, { useEffect, useState } from "react";
import EarningOverviewChart from "../Component/Chart/EarningOverviewChart";
import Selector from "../Component/Selector/Selector";
import EarningHistoryTable from "../Component/Table/EarningHistoryTable";
import AccountService from "../Service/AccountService";

function Earning() {
  const [data, setData] = useState(null);

  const getData = async (value) => {
    const res = await AccountService.getOverViewData({year:value?.value});
    if (res) {
      setData(res);
    }
  };
  useEffect(() => {
    getData(null);
  }, []);

  const options = [
    { value: "2025", label: "2024" },
    { value: "2024", label: "2025" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const [selectedOption, setSelectedOption] = useState({ value: "2023", label: "2023" });

  const handleChange = (name, value) => {
    setSelectedOption(value);
    getData(value)
  };
  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h2>Earning Overview</h2>
          <p>A deep dive into your financial situation</p>
        </div>
      </div>
      <div className="chart_area">
        <div className="chart_top_content">
          <h3>
            Total Earning:<span className="ms-3">₹</span>
            <span>1,20,000.00</span>
          </h3>
          <div>
            <Selector
              options={options}
              name='year'
              onChange={handleChange}
              placeholder="This Year"
              value={selectedOption}
            />
          </div>
        </div>
        <EarningOverviewChart className="chart" />
      </div>
      <div className="table_content">
        <h2>All Time Transactions</h2>
      <div className="table_title">
          <p>Show 4 entries</p>
          <Selector
              options={options}
              onChange={handleChange}
              placeholder="This Year"
              value={selectedOption}
            />
        </div>
        <EarningHistoryTable data={data?.transaction}/>
      </div>
    </div>
  );
}

export default Earning;
