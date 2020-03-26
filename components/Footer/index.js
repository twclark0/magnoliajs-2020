import React from "react";
import ReactDOM from "react-dom";

const styles = {
  position: "absolute",
  bottom: "0",
  right: "25px",
  fontSize: "30px",
  color: "rgb(210, 42, 128)"
};

const Footer = () => {
  return ReactDOM.createPortal(
    <div>
      <p style={styles}>@iamtylerwclark</p>
    </div>,
    document.body
  );
};

export default Footer;
