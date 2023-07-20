import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Bars } from "react-loader-spinner";
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
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await AudioService.addAudio(data);
    setLoading(false);
    if (res?.status == 201) {
      await dispatch(cleanAudioData());
      navigate("/pending");
    }
  };

  const isDisabled = () => {
    if (
      data?.title?.length &&
      data?.artist?.length &&
      data?.writter?.length &&
      data?.writter?.split(" ")?.length > 1 && data?.writter?.split(" ")?.every(word => word?.length >= 3) &&
      data?.composer?.length &&
      data?.composer?.every((item) => {
        const words = item?.name.split(" ");
        return words?.length >= 2 && words?.every((word) => word?.length >= 3);
      }) &&
      data?.main_release_date?.length &&
      data?.original_release_date?.length &&
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
          <Modal.Title>Release Submission</Modal.Title>
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
              className={
                isChecked ? "btn_s" : "btn d-flex justify-content-center"
              }
              onClick={handleSubmit}
              disabled={!isChecked || loading}
            >
              {loading ? (
                <span className="d-flex align-self-center">
                  <Bars
                    height="20"
                    width="20"
                    color="#783efd"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                  <span className="mx-2">Please Wait</span>
                </span>
              ) : (
                "Confirm Submit"
              )}
            </button>
            {/* <Button className="btn_s" onClick={handleSubmit} disabled >Confirm Submit</Button> */}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubmitConfirmationPopup;
