import React, { useEffect, useState } from "react";
import { MdAlarm, MdCreateNewFolder, MdDone } from "react-icons/md";
import Card from "./Card";

const DashboardCardList = ({ data }) => {
  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    if (data) {
      setCardData([
        {
          icon: <MdCreateNewFolder className="icons" />,
          title: "Total Created Audio",
          bgTitle: data?.total,
        },
        {
          icon: <MdAlarm className="icons" />,
          title: "Total Pending Audio",
          bgTitle: data?.pending,
        },
        {
          icon: <MdDone className="icons" />,
          title: "Total Approved Audio",
          bgTitle: data?.approved,
        },
      ]);
    }
  }, [data]);

  return (
    <div className="row">
      {cardData?.map((card, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <Card icon={card.icon} title={card.title} bgTitle={card.bgTitle} />
        </div>
      ))}
    </div>
  );
};

export default DashboardCardList;
