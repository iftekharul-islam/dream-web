import moment from "moment";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AiFillMessage } from "react-icons/ai";
import SupportService from "../../Service/SupportService";
import InputField from "../InputField/InputField";

function SupportReplyPopup({ row }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);

  const getData = async () => {
    const res = await SupportService.getSingleData(row?.id);
    setData(res);
  };

  useEffect(() => {
    if (show && row?.id) {
      getData();
      setMessage({ ...message, support_ticket_id: row?.id });
    }
  }, [show, row?.id]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = (e) => {
    setMessage({ ...message, message: e?.target?.value });
  };

  const handleSend = async() => {
    const res = await SupportService.sendMessage(message);
    getData();
    setMessage({ ...message, message: '' });
  };

  return (
    <>
      <button className="reply_btn" onClick={handleShow}>
        Reply {row?.unread_for_user>0 && "("+row?.unread_for_user+")"}
        <AiFillMessage className="icons" />
      </button>
      <Modal show={show} onHide={handleClose} className="s-popup" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Let me know your problem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="chat_box">
            {data?.map((text) => {
              return (
                <div
                  className={`message-box ${text?.sender == 1 && "author_box"}`}
                >
                  <div className="box">
                    <small>{text?.message}</small>
                    <br />
                    <p>{moment(text?.created_at).format('hh:mmA on DD MMM YYYY')}</p>
                    <p>Sent {text?.sender == 1 ? "from You" : "by Admin"}</p>
                  </div>
                </div>
              );
            })}

            <InputField
              label="Messages"
              type="text"
              onChange={onChange}
              value={message?.message}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <button className="btn" onClick={handleSend}>
              Send
            </button>
            {/* <UploadButton /> */}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SupportReplyPopup;
