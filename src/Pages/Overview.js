import React, { useEffect, useState } from "react";
import Selector from "../Component/Selector/Selector";
import EarningHistoryTable from "../Component/Table/EarningHistoryTable";
import AccountService from "../Service/AccountService";

function Earning() {
  const [data, setData] = useState(null);

  const getData = async (value) => {
    const res = await AccountService.getOverViewData({ year: value?.value });
    if (res) {
      setData(res);
    }
  };
  useEffect(() => {
    getData(null);
  }, []);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const options = [];
    for (
      let i = new Date().getFullYear();
      i > new Date().getFullYear() - 4;
      i--
    ) {
      options.push({
        value: i,
        label: i,
      });
    }
    setOptions(options);
  }, []);

  const [selectedOption, setSelectedOption] = useState({
    value: new Date().getFullYear(),
    label: new Date().getFullYear(),
  });

  const handleChange = (name, value) => {
    setSelectedOption(value);
    getData(value);
  };
  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h2>Earning Overview</h2>
          <p>A deep dive into your financial situation</p>
        </div>
      </div>
      {/* <div className="chart_area">
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
      </div> */}
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
        <EarningHistoryTable data={data?.transaction} />
      </div>
    </div>
  );
}

export default Earning;
