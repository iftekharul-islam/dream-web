import React, { useEffect, useState } from "react";
import ProfileImgUpload from "../Component/ImageUpload/ProfileImgUpload";
import InputField from "../Component/InputField/InputField";
import AuthService from "../Service/AuthService";
import getUser from "../utils/getUser";

function Profile() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(getUser());
  }, []);

  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };
  const handleSave = async() => {
    await AuthService.updateProfile(data);
    setIsEditable(false);
    window.alert("All information saved");
  };
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };


  return (
    <>
      <div className="user_profile_top mb-5">
        <div className="user_p_info">
          <ProfileImgUpload />
          <div className="text_area" style={{marginLeft: 50}}>
            <h2>{data?.username}</h2>
            <p className="mt-2">
              Govt. ID: <span>{data?.govt_id}</span>
            </p>
          </div>
        </div>
        <div>
          {isEditable ? (
            <button className="btn" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="btn" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <InputField
            label="First Name"
            star="*"
            value={data?.first_name}
            name="first_name"
            onChange={handleChange}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Last Name"
            star="*"
            value={data?.last_name}
            name="last_name"
            onChange={handleChange}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Phone Number"
            star="*"
            value={data?.phone}
            name="phone"
            onChange={handleChange}
            type="text"
            error={null}
            disabled={true}
          />
          <InputField
            label="Country / Region"
            star="*"
            value={data?.country}
            name="country"
            onChange={handleChange}
            type="text"
            error={null}
            disabled={!isEditable}
          />
        </div>
        <div className="col-lg-6">
          <InputField
            label="City"
            star="*"
            value={data?.city}
            name="city"
            onChange={handleChange}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="State"
            star="*"
            value={data?.state}
            name="state"
            onChange={handleChange}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Postal Address"
            star="*"
            value={data?.postal_address}
            name="postal_address"
            onChange={handleChange}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Postal Code"
            star="*"
            value={data?.postal_code}
            name="postal_code"
            onChange={handleChange}
            type="text"
            error={null}
            disabled={!isEditable}
          />
        </div>
        <div className="col-lg-6 mt-5">
          <h2>My Email Address</h2>
          <InputField
            label="Primary E-mail"
            star="*"
            value={data?.email}
            type="text"
            error={null}
            disabled={true}
          />
          {/* <button className="btn_s mt-4">Add Email Address</button> */}
        </div>
      </div>
    </>
  );
}

export default Profile;
