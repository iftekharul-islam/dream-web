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
        let sTitle = card?.artists && card?.artists[0]?.artist?.title;
        if (card?.artists?.length > 1) {
          sTitle = sTitle + " & " + (card?.artists?.length - 1) + " more";
        }
        return (
          <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
            <Link
              onClick={async (e) => {
                e.preventDefault();
                await dispatch(setCardDetails(card));
                navigate("/catalog_details");
              }}
            >
              <Card
                sImg={card?.images && card?.images?.image_download_url}
                title={card?.title}
                sTitle={sTitle}
                status={Approve}
                ringtone={card?.is_caller_tune ? RingtoneImg : null}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ApprovedCardList;
