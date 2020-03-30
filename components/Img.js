import React from "react";

const Img = ({ url, ...props }) => (
  <div style={{ textAlign: "center" }}>
    <img className="main-image" src={url} />
  </div>
);

export default Img;
