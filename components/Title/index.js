import React from "react";

const Title = ({ text }) => {
  return (
    text &&
    text
      .split(" ")
      .map(t => <span className="backgroundHighlight">{` ${t} `}</span>)
  );
};

export default Title;
