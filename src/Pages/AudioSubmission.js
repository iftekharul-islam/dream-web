import React, { useEffect, useState } from "react";
import { BiMusic } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CatalogsInfo from "../Component/CatalogsInfo/CatalogsInfo";
import SubmitConfirmationPopup from "../Component/Modal/SubmitConfirmationPopup";
import OptionService from "../Service/OptionService";

const AudioSubmission = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState({});
  const getOptions = async () => {
    const artist = await OptionService.getArtist();
    const genre = await OptionService.getGenre();
    const language = await OptionService.getLanguage();
    const label = await OptionService.getLabel();
    const format = await OptionService.getFormat();
    const advisory = await OptionService.getAdvisory();
    setOptions({
      ...options,
      artist: artist,
      genre: genre,
      language: language,
      label: label,
      format: format,
      advisory: advisory,
    });
  };
  useEffect(() => {
    getOptions();
  }, []);

  const { data } = useLocation()?.state;

  const handleEditButton = () => {
    navigate(`/release-audio`, {
      state: {
        data: data,
      },
    });
  };

  useEffect(() => {
    if (!data) navigate("/release-audio");
  });

  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Submission</h1>
          <p>Release your submission</p>
        </div>
        <div className="btn_area">
          <SubmitConfirmationPopup data={data} />
          <Link className="btn_s" onClick={handleEditButton}>
            Edit
          </Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-9 col-md-12">
          <CatalogsInfo data={data} options={options}/>
          <div className="row s_info mt-5">
            <h2 className="mb-4">Release Information</h2>
            <div className="col-lg-3">
              <div className="items">
                <div className="item">
                  <div className="input_value">
                    <p className="input_name">Main Release Date</p>{" "}
                    <span>: 12-12-2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 mt-5 upload_info">
          <div className="card audio">
            <BiMusic className="icons" />
            <p>{data?.file?.name}</p>
            {data?.file && (
              <audio controls>
                <source
                  src={URL.createObjectURL(data?.file)}
                  type="audio/mpeg"
                />
              </audio>
            )}
          </div>
          <div className="card mt-4">
            <img src={data?.selectedImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioSubmission;
