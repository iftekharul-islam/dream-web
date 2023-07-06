import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Approve from "../assets/icons/S.svg";
import RingtoneImg from "../assets/icons/ringtone.svg";
import Card from "./Card";

const ApprovedCardList = ({ cardData }) => {
  const navigate = useNavigate();
  return (
    <div className="row">
      {cardData?.map((card, index) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
            <Link
              // to="/catalog_details"
              onClick={(e) => {
                e.preventDefault();
                navigate("/catalog_details", {
                  state: {
                    data: card,
                  },
                });
              }}
            >
              <Card
                sImg={card?.images && card?.images?.image_download_url}
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
