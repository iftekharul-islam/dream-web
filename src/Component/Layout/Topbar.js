import React, { useEffect, useRef, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import AuthService from "../../Service/AuthService";
import getUser from "../../utils/getUser";
import Notification from "../Notification/Notification";
import userImg from "../assets/img/user.png";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSignOut = async() => {
    setIsOpen(false);
    await AuthService.logout();
    // Perform sign out logic here
  };

  const [notification, setNotification] = useState([]);

  const getNotification = async () => {
    const res = await AuthService.getNotification();
    setNotification(res);
  };

  useEffect(() => {
    getNotification();
  }, []);
  

  return (
    <div className="topbar_item">
      <Notification notification={notification}/>
      <Link to="/profile" className="account_info">
        <p className="name">{getUser()?.username}</p>
        <img src={getUser()?.profile_image? getUser()?.profile_image_url : userImg} alt="" />
      </Link>
      <div className="toggle_account_info">
        <AiFillSetting className="icons" onClick={toggleMenu} />
        {isOpen && (
          <div className="menu_item" ref={menuRef}>
            {/* <ChangePasswordPopup /> */}
            <Link to="/" onClick={handleSignOut}>
              <p>Sign Out</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;
