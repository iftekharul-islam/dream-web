import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import AccountService from "../../Service/AccountService";
import InputField from "../InputField/InputField";

function AddBankPopup({ onUpdate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({});
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onChangeChecked = (event) => {
    setData({ ...data, [event.target.name]: event.target.checked ? 1 : 0 });
  };

  const handleSubmit = async () => {
    await AccountService.addBankDetails(data);
    handleClose();
    onUpdate();
  };

  return (
    <>
      <button className="btn mt-4" onClick={handleShow}>
        Add payment method
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter bank details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputField
            type="text"
            label="Bank Name"
            value={data?.bank_name}
            name="bank_name"
            star="*"
            onChange={onChange}
          />
          <InputField
            type="text"
            label="Name On Bank Account"
            value={data?.account_name}
            name="account_name"
            star="*"
            onChange={onChange}
          />
          <InputField
            type="number"
            label="Account Number"
            value={data?.account_number}
            name="account_number"
            star="*"
            onChange={onChange}
          />
          <InputField
            type="number"
            label="Re-type Account Number"
            value={data?.re_account_number}
            name="re_account_number"
            star="*"
            onChange={onChange}
          />
          <InputField
            type="number"
            label="IFSC Code"
            value={data?.ifsc}
            name="ifsc"
            star="*"
            onChange={onChange}
          />
          <div className="mt-3 check_box">
            <input
              type="checkbox"
              checked={data?.isPrimary}
              name="isPrimary"
              onChange={onChangeChecked}
            />
            Set as primary method
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <button
              className="btn"
              onClick={handleSubmit}
              disabled={
                !data?.bank_name ||
                !data?.account_name ||
                !data?.account_number ||
                !data?.re_account_number ||
                !data?.ifsc ||
                data?.account_number != data?.re_account_number
              }
            >
              Save
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

export default AddBankPopup;
