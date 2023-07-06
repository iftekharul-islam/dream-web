import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AudioUploadForm from "../Component/AudioUpload/AudioUploadForm";
import ImageUploadForm from "../Component/ImageUpload/ImageUploadForm";
import IconInputField from "../Component/InputField/IconInputField";
import IconSelectField from "../Component/InputField/IconSelectField";
import InputField from "../Component/InputField/InputField";
import Selector from "../Component/Selector/Selector";
import OptionService from "../Service/OptionService";

const ReleaseAudio = () => {
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

  const [data, setData] = useState();
  console.log("🚀 ~ file: ReleaseAudio.js:37 ~ ReleaseAudio ~ data:", data)
  const { state } = useLocation();
  useEffect(() => {
    if (state?.data) {
      setData(state.data);
    }
  }, [state]);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (name, event) => {
    setData({
      ...data,
      [name]: event?.value,
    });
  };

  const handleFileChange = (name, file) => {
    setData({
      ...data,
      [name]: file,
    });
  };

  // Preivew Button
  const handleButtonClick = () => {
    navigate(`/audio_submission`, {
      state: {
        data: data,
      },
    });
  };

  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Release Information</h1>
          <p>Details About the Upcoming Release</p>
        </div>
        <div className="btn_area">
          <button className="btn" onClick={handleButtonClick}>
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
                value={data?.title}
                onChange={handleChange}
              />
              <InputField
                label="Version/Subtitle"
                placeholder="Enter Version/Subtitle"
                name="subtitle"
                value={data?.subtitle}
                onChange={handleChange}
              />
              <IconSelectField
                labels={["Primary Artist", "Secondary Artist"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="artist"
                onChange={handleChange}
                star="*"
                options={options}
              />
              <IconInputField
                labels={["Featuring", "Secondary Featuring"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="featuring"
                onChange={handleChange}
              />
              <IconInputField
                labels={["Remixer", "Secondary Remixer"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="remixer"
                onChange={handleChange}
              />
              <div className="add_input mt-3">
                <InputField
                  label="Song Writer"
                  star="*"
                  placeholder="Enter Song Writer"
                  name="writter"
                  value={data?.writter}
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
              <InputField
                label="Main Release Date"
                star="*"
                placeholder="Enter Main Release Date"
                name="main_release_date"
                value={data?.main_release_date}
                onChange={handleChange}
              />
              <IconInputField
                labels={["Arranger", "Secondary Arranger"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="arranger"
                onChange={handleChange}
              />
              <IconInputField
                labels={["Producer", "Secondary Producer"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
                name="producer"
                onChange={handleChange}
              />
              <InputField
                label="Original Release Date"
                star="*"
                placeholder="Enter Original Release Date"
                name="original_release_date"
                value={data?.original_release_date}
                onChange={handleChange}
              />
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Lyrics Language <span className="input_star">*</span>
                </label>
                <Selector
                  options={options?.language}
                  name="language_id"
                  placeholder="Select Lyrics Language"
                  onChange={handleSelectChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Genre <span className="input_star">*</span>
                </label>
                <Selector
                  options={options?.genre}
                  name="genre_id"
                  placeholder="Select Genre"
                  onChange={handleSelectChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Subgenre <span className="input_star">*</span>
                </label>
                <Selector
                  options={
                    options?.genre?.find(
                      (item) => item?.value == data?.genre_id
                    )?.subgenres
                  }
                  name="subgenre_id"
                  placeholder="Select Subgenre"
                  onChange={handleSelectChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Label Name <span className="input_star">*</span>
                </label>
                <Selector
                  options={options?.label}
                  name="label_id"
                  placeholder="Select Label Name"
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
                  options={options?.format}
                  name="format_id"
                  placeholder="Select Format"
                  onChange={handleSelectChange}
                />
              </div>
              <InputField
                label="℗ line"
                star="*"
                placeholder="Enter ℗ line"
                name="p_name"
                value={data?.p_name}
                onChange={handleChange}
              />
              <InputField
                label="© line"
                star="*"
                placeholder="Enter © line"
                name="c_name"
                value={data?.c_name}
                onChange={handleChange}
              />
              <InputField
                label="UPC/EAN"
                placeholder="Enter UPC/EAN"
                name="upc"
                value={data?.upc}
                onChange={handleChange}
              />
              <InputField
                label="ISRC"
                placeholder="Enter ISRC"
                name="isrc"
                value={data?.isrc}
                onChange={handleChange}
              />
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Parental Advisory
                </label>
                <Selector
                  options={options?.advisory}
                  name="advisory_id"
                  placeholder="Select Parental Advisory"
                  onChange={handleSelectChange}
                />
              </div>
              <InputField
                label="Producer Catalogue Number"
                placeholder="Enter Producer Catalogue Number"
                name="producer_catalogue_number"
                value={data?.producer_catalogue_number}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-5">
          <div>
            <ImageUploadForm onChange={handleFileChange} />
          </div>
          <div className="mt-4">
            <AudioUploadForm onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReleaseAudio;
