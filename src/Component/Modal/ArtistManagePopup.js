import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ArtistService from "../../Service/ArtistService";
import InputField from "../InputField/InputField";

function ArtistManagePopup({ getData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState(null);
  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  };

  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    if (!data?.title) {
      setError(true);
    } else {
      const res = await ArtistService.createLabel(data);
      if (res?.status == 201) {
        setError(null);
        setData(null)
        handleClose();
        getData();
      }
    }
  };

  return (
    <>
      <button className="btn add_label_btn mt-4" onClick={handleShow}>
        Add Artist
      </button>
      <Modal show={show} onHide={handleClose} className="add_label">
        <Modal.Header closeButton>
          <Modal.Title>Enter label details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input_group">
            <InputField
              label="Title"
              star="*"
              value={data?.title}
              name="title"
              onChange={handleChange}
            />
            {error && (
              <small className="text-danger">
                *Please enter a title for the label
              </small>
            )}
            <InputField
              label="Spotify ID"
              value={data?.spotify_url}
              name="spotify_url"
              onChange={handleChange}
            />
            <InputField
              label="Apple ID"
              value={data?.apple_url}
              name="apple_url"
              onChange={handleChange}
            />
            <InputField
              label="Instagram ID"
              value={data?.instagram_url}
              name="instagram_url"
              onChange={handleChange}
            />
            <InputField
              label="Facebook URL"
              value={data?.facebook_url}
              name="facebook_url"
              onChange={handleChange}
            />
            <InputField
              label="YouTube Channel URL"
              value={data?.youtube_url}
              name="youtube_url"
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn_s" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ArtistManagePopup;
