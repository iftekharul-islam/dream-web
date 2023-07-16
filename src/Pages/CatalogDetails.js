import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CatalogsInfoDetails from "../Component/CatalogsInfo/CatalogsInfoDetails";
import CallerTunePopup from "../Component/Modal/CallerTunePopup";
import Draft from "../Component/assets/icons/D.svg";
import Pending from "../Component/assets/icons/P.svg";
import Approve from "../Component/assets/icons/S.svg";
import RingtoneImg from "../Component/assets/icons/ringtone.svg";

function CatalogDetails() {
  const navigate = useNavigate();
  const { cardDetails } = useSelector((state) => state?.data);

  useEffect(() => {
    if (!cardDetails) navigate(-1);
  }, [cardDetails]);

  return (
    <>
      <div
        className="catalog_details"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `linear-gradient(0deg, rgba(9, 9, 9, 0.8), rgba(9, 9, 9, 0.8)), url(${cardDetails?.images?.image_download_url})`,
        }}
      >
        <div className="card">
          <img src={cardDetails?.images?.image_download_url} alt="" />
          <div className="c_top_info">
            <div className="icon-list">
              {cardDetails?.status == 1 && (
                <img src={Pending} className="ringtone" alt="" />
              )}
              {cardDetails?.status == 2 && (
                <img src={Draft} className="ringtone" alt="" />
              )}
              {cardDetails?.status == 3 && (
                <img src={Approve} className="ringtone" alt="" />
              )}
              {cardDetails?.is_caller_tune == 1 && (
                <img src={RingtoneImg} className="ringtone" alt="" />
              )}
            </div>
            <h2 className="mt-3">{cardDetails?.title} </h2>
            <p className="mt-2">By {cardDetails?.artists[0]?.artist?.title}</p>
            <br />
            {cardDetails?.files && cardDetails?.files?.file_download_url && (
              <video controls name="media" width="200%" height={60}>
                <source
                  src={cardDetails?.files?.file_download_url}
                  type="audio/mpeg"
                />
              </video>
            )}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <CatalogsInfoDetails data={cardDetails} />
        <div className="btn_group mt-4">
          <CallerTunePopup data={cardDetails} />
          {/* <button className="btn_s">Edit</button> */}
        </div>
        <div className="btn_group mt-4">
          {cardDetails?.status == 4 && (
            <button className="btn btn-danger" disabled={true}>
              <span className="text-white">
                Rejection Note: {cardDetails?.note}
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default CatalogDetails;
