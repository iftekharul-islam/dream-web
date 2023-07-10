import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import CallerTuneService from "../../Service/CallerTuneService";
import TermsAndConditionsCheckbox from "../Checkbox/TermsAndConditionsCheckbox";

function CallerTunePopup({ data }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSelectedCards([]);
  };

  const handleShow = () => setShow(true);

  const handleCardClick = (cardName) => {
    const isSelected = selectedCards.includes(cardName);

    if (isSelected) {
      setSelectedCards(selectedCards.filter((card) => card !== cardName));
    } else {
      setSelectedCards([...selectedCards, cardName]);
    }
  };

  const onApply = async() => {
    if(selectedCards.length == 0){
      alert("Please select CRBT");
    } else {
      const res = await CallerTuneService.applyCallerTune({id: data?.id, crbt_ids: selectedCards});
      if(res){
        handleClose();
        navigate('/caller_tune');
      }
    }
  }

  const [CRBT, setCRBT] = useState([]);
  const getCRBT = async () => {
    const res = await CallerTuneService.getCRBT();
    if (res) {
      setCRBT(res);
    }
  };
  useEffect(() => {
    getCRBT();
  }, []);

  return (
    <>
      {data?.status == 3 && (
        <button
          className="btn"
          onClick={handleShow}
          disabled={data?.is_caller_tune}
        >
          {data?.is_caller_tune
            ? "Already Caller Tune"
            : "Apply For Caller Tune"}
        </button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caller Tune details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cTune">
            <div className="items">
              <h2>Select CRBT</h2>
              <div className="item">
                {CRBT?.map(
                  (item, index) =>
                    item?.status == 1 && (
                      <div
                        className={`card ${
                          selectedCards.includes(item?.id) ? "active" : ""
                        }`}
                        onClick={() => handleCardClick(item?.id)}
                      >
                        <img src={item?.icon} alt="" />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="items mt-4">
              <h2>Coming Soon CRBT</h2>
              <div className="item">
                {CRBT?.map(
                  (item, index) =>
                    item?.status == 0 && (
                      <div className="card">
                        <img src={item?.icon} alt="" />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="items mt-4">
              <TermsAndConditionsCheckbox isChecked={isChecked} setIsChecked={setIsChecked}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <button className="btn" onClick={onApply} disabled={!isChecked}>
              Apply
            </button>
            <button className="btn_s" onClick={handleClose}>
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CallerTunePopup;
