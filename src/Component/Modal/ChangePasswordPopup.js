import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PasswordInput from "../InputField/PasswordInput";

function Example() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {};

  return (
    <>
      <p onClick={handleShow}>Change Your Password</p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <PasswordInput
                label="Current Password"
                name="old_password"
                value={data?.old_password}
                star="*"
                onChange={handleChange}
              />
              <PasswordInput
                label="New Password"
                name="password"
                value={data?.password}
                star="*"
                onChange={handleChange}
              />
              <PasswordInput
                label="Confirm Password"
                name="c_password"
                value={data?.c_password}
                star="*"
                onChange={handleChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <button className="btn" onClick={handleClose}>
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

export default Example;
