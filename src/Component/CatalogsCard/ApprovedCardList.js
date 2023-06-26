import React from "react";
import { Link } from "react-router-dom";
import Approve from "../assets/icons/S.svg";
import RingtoneImg from "../assets/icons/ringtone.svg";
import Card from "./Card";

const ApprovedCardList = ({ cardData }) => {
  return (
    <div className="row">
      {cardData?.map((card, index) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
            <Link to="/catalog_details">
              <Card
                sImg={card?.images && card?.images[0]?.image_download_url}
                title={card?.title}
                sTitle={card?.subtitle}
                status={Approve}
                ringtone={card?.is_coller_tune ? RingtoneImg : null}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ApprovedCardList;
