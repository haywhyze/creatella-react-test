import React, { useRef } from "react";
import { Typography, Spin, Icon } from "antd";

const { Text } = Typography;

export default function Ad({ top }) {
  const image = useRef(null);
  const imageSpinner = useRef(null);

  const removeImageSpinner = () => {
    imageSpinner.current.style.display = "none";
  };

  return (
    <div className="ad-container">
      {top && <Text strong>But first, a word from our sponsors:</Text>}
      <img
        ref={image}
        className="ad"
        src={
          "http://localhost:3000/ads/?r=" +
          Math.floor(Math.random() * 1000) +
          ""
        }
        onLoad={removeImageSpinner}
      />
      <div ref={imageSpinner}>
        <Spin tip="Loading ad..." indicator={<Icon type="loading" spin />} />
      </div>
    </div>
  );
}
