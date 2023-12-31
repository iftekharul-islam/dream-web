import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCardDetails } from "../../Pages/redux-store";
import Pending from "../assets/icons/P.svg";
import Card from "./Card";

const PendingCardList = ({ cardData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="row">
      {cardData.map((card, index) => {
        let sTitle = card?.artists && card?.artists[0]?.artist?.title;
        if (card?.artists?.length > 1) {
          sTitle = sTitle + " & " + (card?.artists?.length - 1) + " more";
        }
        return (
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Link
              // to="/catalog_details"
              onClick={async (e) => {
                e.preventDefault();
                await dispatch(setCardDetails(card));
                navigate("/catalog_details");
              }}
            >
              <Card
                key={index}
                sImg={card?.images && card?.images?.image_download_url}
                title={card?.title}
                sTitle={sTitle}
                status={Pending}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PendingCardList;
