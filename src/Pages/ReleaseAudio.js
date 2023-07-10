import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OptionService from "../Service/OptionService";
import AudioUploadForm from "./ReleaseAudioComponents/AudioUploadForm";
import CalenderField from "./ReleaseAudioComponents/CalenderField";
import IconInputField from "./ReleaseAudioComponents/IconInputField";
import IconSelectField from "./ReleaseAudioComponents/IconSelectField";
import ImageUploadForm from "./ReleaseAudioComponents/ImageUploadForm";
import InputField from "./ReleaseAudioComponents/InputField";
import Selector from "./ReleaseAudioComponents/Selector";
import { setAudioData, setAudioOptions } from "./redux-store";

const ReleaseAudio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { audioData, audioOptions } = useSelector((state) => state?.data);

  const getOptions = async () => {
    const artist = await OptionService.getArtist();
    const genre = await OptionService.getGenre();
    const language = await OptionService.getLanguage();
    const label = await OptionService.getLabel();
    const format = await OptionService.getFormat();
    const advisory = await OptionService.getAdvisory();
    dispatch(
      setAudioOptions({
        artist: artist,
        genre: genre,
        language: language,
        label: label,
        format: format,
        advisory: advisory,
      })
    );
  };
  useEffect(() => {
    !audioOptions && getOptions();
  }, []);

  const updateData = (name, value) => {
    dispatch(setAudioData({ [name]: value }));
  };

  const handleChange = (event) => {
    updateData(event?.target?.name, event?.target?.value);
  };

  const handleSelectChange = (name, event) => {
    updateData(name, event?.value);
  };

  const handleFileChange = (val) => {
    dispatch(setAudioData(val));
  };

  const handleButtonClick = () => {
    navigate(`/audio_submission`);
  };

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month > 9 ? month : "0" + month}-${day}`;

  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Release Information</h1>
          <p>Details About the Upcoming Release</p>
        </div>
        <div className="btn_area">
          <button
            className="btn"
            onClick={handleButtonClick}
            disabled={!audioData}
          >
            Preview
          </button>
        </div>
      </div>
      <div className="row release-row">
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="input_group">
            <div>
              <InputField
                label="Release Title"
                star="*"
                placeholder="Enter Release Title"
                name="title"
                value={audioData?.title}
                onChange={handleChange}
              />
              <InputField
                label="Version/Subtitle"
                placeholder="Enter Version/Subtitle"
                name="subtitle"
                value={audioData?.subtitle}
                onChange={handleChange}
              />
              <IconSelectField
                labels={["Primary Artist", "Secondary Artist"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="artist"
                data={audioData?.artist}
                onChange={handleChange}
                star="*"
                options={audioOptions?.artist}
              />
              <IconInputField
                labels={["Featuring", "Secondary Featuring"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="featuring"
                data={audioData?.featuring}
                onChange={handleChange}
              />
              <IconInputField
                labels={["Remixer", "Secondary Remixer"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="remixer"
                data={audioData?.remixer}
                onChange={handleChange}
              />
              <div className="add_input mt-3">
                <InputField
                  label="Song Writer"
                  star="*"
                  placeholder="Enter Song Writer"
                  name="writter"
                  value={audioData?.writter}
                  onChange={handleChange}
                />
                <p className="input_desc">
                  Digital Audio Stores required Full First & Last Name
                </p>
              </div>
              <div className="add_input mt-3">
                <IconInputField
                  labels={["Composer", "Secondary Composer"]}
                  ids={["input1", "input2"]}
                  placeholders={[null, null]}
                  name="composer"
                  data={audioData?.composer}
                  onChange={handleChange}
                  star="*"
                />
                <p className="input_desc">
                  Digital Audio Stores required Full First & Last Name
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="input_group">
            <div>
              <CalenderField
                label="Main Release Date"
                star="*"
                placeholder="Enter Main Release Date"
                name="main_release_date"
                value={audioData?.main_release_date}
                onChange={handleChange}
                min={currentDate}
              />
              <IconInputField
                labels={["Arranger", "Secondary Arranger"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="arranger"
                data={audioData?.arranger}
                onChange={handleChange}
              />
              <IconInputField
                labels={["Producer", "Secondary Producer"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="producer"
                data={audioData?.producer}
                onChange={handleChange}
              />
              <CalenderField
                label="Original Release Date"
                star="*"
                placeholder="Enter Original Release Date"
                name="original_release_date"
                value={audioData?.original_release_date}
                onChange={handleChange}
              />
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Lyrics Language <span className="input_star">*</span>
                </label>
                <Selector
                  options={audioOptions?.language}
                  name="language_id"
                  placeholder="Select Lyrics Language"
                  value={audioOptions?.language?.find(
                    (item) => item?.value == audioData?.language_id
                  )}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Genre <span className="input_star">*</span>
                </label>
                <Selector
                  options={audioOptions?.genre}
                  name="genre_id"
                  placeholder="Select Genre"
                  value={audioOptions?.genre?.find(
                    (item) => item?.value == audioData?.genre_id
                  )}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Subgenre <span className="input_star">*</span>
                </label>
                <Selector
                  options={
                    audioOptions?.genre?.find(
                      (item) => item?.value == audioData?.genre_id
                    )?.subgenres
                  }
                  name="subgenre_id"
                  placeholder="Select Subgenre"
                  value={audioOptions?.genre
                    ?.find((item) => item?.value == audioData?.genre_id)
                    ?.subgenres?.find(
                      (item) => item?.value == audioData?.subgenre_id
                    )}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Label Name <span className="input_star">*</span>
                </label>
                <Selector
                  options={audioOptions?.label}
                  name="label_id"
                  placeholder="Select Label Name"
                  value={audioOptions?.label?.find(
                    (item) => item?.value == audioData?.label_id
                  )}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="input_group">
            <div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Format <span className="input_star">*</span>
                </label>
                <Selector
                  options={audioOptions?.format}
                  name="format_id"
                  placeholder="Select Format"
                  value={audioOptions?.format?.find(
                    (item) => item?.value == audioData?.format_id
                  )}
                  onChange={handleSelectChange}
                />
              </div>
              <InputField
                label="℗ line"
                star="*"
                placeholder="Enter ℗ line"
                name="p_line"
                value={audioData?.p_line}
                onChange={handleChange}
              />
              <InputField
                label="© line"
                star="*"
                placeholder="Enter © line"
                name="c_line"
                value={audioData?.c_line}
                onChange={handleChange}
              />
              <InputField
                label="UPC/EAN"
                placeholder="Enter UPC/EAN"
                name="upc"
                value={audioData?.upc}
                onChange={handleChange}
              />
              <InputField
                label="ISRC"
                placeholder="Enter ISRC"
                name="isrc"
                value={audioData?.isrc}
                onChange={handleChange}
              />
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Parental Advisory
                </label>
                <Selector
                  options={audioOptions?.advisory}
                  name="parental_advisory_id"
                  placeholder="Select Parental Advisory"
                  value={audioOptions?.advisory?.find(
                    (item) => item.value == audioData?.parental_advisory_id
                  )}
                  onChange={handleSelectChange}
                />
              </div>
              <InputField
                label="Producer Catalogue Number"
                placeholder="Enter Producer Catalogue Number"
                name="producer_catalogue_number"
                value={audioData?.producer_catalogue_number}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-5">
          <div>
            <ImageUploadForm data={audioData} onChange={handleFileChange} />
          </div>
          <div className="mt-4">
            <AudioUploadForm data={audioData} onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReleaseAudio;
