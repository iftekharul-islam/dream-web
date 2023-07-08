import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanAudioData } from "../../Pages/redux-store";
import AudioService from "../../Service/AudioService";
import TermsAndConditionsCheckbox from "../Checkbox/TermsAndConditionsCheckbox";

function SubmitConfirmationPopup({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    const res = await AudioService.addAudio(data);
    if (res?.status == 201) {
      await dispatch(cleanAudioData())
      navigate("/pending");
    }
  };

  const isDisabled = () => {
    if (
      data?.title &&
      data?.artist &&
      data?.writter &&
      data?.composer &&
      data?.main_release_date &&
      data?.original_release_date &&
      data?.language_id &&
      data?.genre_id &&
      data?.subgenre_id &&
      data?.label_id &&
      data?.image &&
      data?.file
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <button className="btn" onClick={handleShow} disabled={isDisabled()}>
        Submit My Release
      </button>
      <Modal show={show} onHide={handleClose} className="s-popup" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Let me know your problem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TermsAndConditionsCheckbox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <button
              className={isChecked ? "btn_s" : "btn"}
              onClick={handleSubmit}
              disabled={!isChecked}
            >
              Confirm Submit
            </button>
            {/* <Button className="btn_s" onClick={handleSubmit} disabled >Confirm Submit</Button> */}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubmitConfirmationPopup;
