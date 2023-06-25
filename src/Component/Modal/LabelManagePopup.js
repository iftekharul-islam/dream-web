import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LabelService from "../../Service/LabelService";
import InputField from "../InputField/InputField";
import TextField from "../TextBox/TextField";

function LabelManagePopup({getData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [ytLink, setYtLink] = useState("");

  const handleYtChange = (event) => {
    setYtLink(event.target.value);
  };

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const [error, setError] = useState(null);

  const handleSubmit = async() => {
    if(!title) {
      setError(true);
    } else {
      const res = await LabelService.createLabel({title, youtube_url: ytLink, message: comment});
      if(res?.status == 201) {
        setError(null);
        setTitle("");
        setYtLink("");
        setComment("");
        handleClose();
        getData();
      }
    }
  }

  return (
    <>
      <button className="btn add_label_btn mt-4" onClick={handleShow}>
        Add label
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
              value={title}
              onChange={handleTitleChange}
            />
            {error && <small className="text-danger">
              *Please enter a title for the label
            </small>
            }
            <InputField
              label="Youtube URL"
              star="*"
              value={ytLink}
              onChange={handleYtChange}
            />
            <TextField
                label="Messages"
                type="text"
                value={comment}
                onChange={handleCommentChange}
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

export default LabelManagePopup;
