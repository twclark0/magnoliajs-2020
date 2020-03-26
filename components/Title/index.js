import React from "react";

const Title = ({ text }) => {
  return text && text.split(" ").map(t => <span>{` ${t} `}</span>);
};

export default Title;
