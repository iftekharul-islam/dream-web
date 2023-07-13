import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApprovedCardList from "../Component/CatalogsCard/ApprovedCardList";
import DashboardCardList from "../Component/DashboardCard/DashboardCardList";
import RowCardList from "../Component/DashboardCard/RowCardList";
import DashboardService from "../Service/DashboardService";

const Dashboard = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await DashboardService.getAllData();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <DashboardCardList data={data?.count} />
      </div>
      <div className="mt-4">
        <h2>Latest Release</h2>
        <ApprovedCardList cardData={data?.data?.approved} />
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="draft_list">
            <div className="draft_header">
              <h2>Latest Draft</h2>
              <Link to="/draft">See More</Link>
            </div>
            <div className="ps-3 pe-3 mt-1">
              <RowCardList data={data?.data?.draft} link="/draft" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="draft_list">
            <div className="draft_header">
              <h2>Latest Pending</h2>
              <Link to="/pending">See More</Link>
            </div>
            <div className="ps-3 pe-3 mt-1">
              <RowCardList data={data?.data?.pending} link="/pending" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
