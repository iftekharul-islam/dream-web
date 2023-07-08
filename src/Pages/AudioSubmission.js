import moment from "moment";
import React, { useEffect } from "react";
import { BiMusic } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CatalogsInfo from "../Component/CatalogsInfo/CatalogsInfo";
import SubmitConfirmationPopup from "../Component/Modal/SubmitConfirmationPopup";

const AudioSubmission = () => {
  const navigate = useNavigate();
  const { audioData, audioOptions } = useSelector((state) => state?.data);

  useEffect(() => {
    if (!audioData) navigate("/release-audio");
  });

  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Submission</h1>
          <p>Release your submission</p>
        </div>
        <div className="btn_area">
          <SubmitConfirmationPopup data={audioData} />
          <Link className="btn_s" to="/release-audio">
            Edit
          </Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-9 col-md-12">
          <CatalogsInfo data={audioData} options={audioOptions} />
          <div className="row s_info mt-5">
            <h2 className="mb-4">Release Information</h2>
            <div className="col-lg-4">
              <div className="items">
                <div className="item">
                  <div className="input_value">
                    <p className="input_name">Main Release Date</p>{" "}
                    <span>
                      :{" "}
                      {audioData?.main_release_date ? (
                        moment(audioData?.main_release_date).format("DD MMM YYYY")
                      ) : (
                        <span className="px-1">
                          N/A <span className="text-danger px-1">required</span>
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 mt-5 upload_info">
          <div className="card audio">
            <BiMusic className="icons" />
            <p>{audioData?.file?.name}</p>
            {audioData?.file ? (
              <audio controls>
                <source
                  src={URL.createObjectURL(audioData?.file)}
                  type="audio/mpeg"
                />
              </audio>
            ) : (
              <div>
                <p className="text-danger">Audio file is required</p>
              </div>
            )}
          </div>
          <div className="card mt-4">
            {audioData?.selectedImage ? (
              <img src={audioData?.selectedImage} alt="" />
            ) : (
              <div>
                <p className="text-danger">Image is required</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioSubmission;
