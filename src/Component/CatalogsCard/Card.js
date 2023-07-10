import React from "react";

const Card = ({ sImg, title, sTitle, status, ringtone }) => {
  return (
    <div
      className="catalog_card"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(9, 9, 9, 0.8), rgba(9, 9, 9, 0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${sImg})`,
      }}
    >
      <div className="card position-relative">
        <div className="status_icon">
          <img src={status} alt={title} className="status" />
          {ringtone && <img src={ringtone} alt={title} className="ringtone" />}
        </div>
        <img className="cover_img" src={sImg} alt={title} />
        <h2>{title}</h2>
        <p>{sTitle}</p>
      </div>
    </div>
  );
};

export default Card;
