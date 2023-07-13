import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import RowCard from "./RowCard";

const RowCardList = ({data, link='#'}) => {
  return (
    <div className="row">
      {data?.map((card, index) => (
        <div className="col-lg-12" key={index}>
          <Link to={link}>
            <RowCard
              rImg={card?.images?.image_download_url}
              title={card.title}
              name={card?.artists[0]?.artist?.title}
              dateTitle= "Release Date"
              date={moment(card?.created_at).format("DD-MM-YYYY")}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RowCardList;
