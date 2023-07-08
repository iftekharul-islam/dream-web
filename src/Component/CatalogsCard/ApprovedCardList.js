import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCardDetails } from "../../Pages/redux-store";
import Approve from "../assets/icons/S.svg";
import RingtoneImg from "../assets/icons/ringtone.svg";
import Card from "./Card";

const ApprovedCardList = ({ cardData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="row">
      {cardData?.map((card, index) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
            <Link
              onClick={async(e) => {
                e.preventDefault();
                await dispatch(setCardDetails(card))
                navigate("/catalog_details");
              }}
            >
              <Card
                sImg={card?.images && card?.images?.image_download_url}
                title={card?.title}
                sTitle={card?.subtitle ?? "No Subtitle"}
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
