import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Pending from "../assets/icons/P.svg";
import Card from "./Card";

const PendingCardList = ({cardData}) => {
  const navigate = useNavigate();
  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12">
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
            key={index}
            sImg={card?.images && card?.images?.image_download_url}
            title={card?.title}
            sTitle={card?.subtitle}
            status={Pending}
          />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PendingCardList;
