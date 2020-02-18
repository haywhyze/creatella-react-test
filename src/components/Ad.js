import React, { useRef } from 'react';
import { Typography, Spin, Icon } from 'antd';
import { baseUrl } from '../api';

const { Text } = Typography;

export default function Ad({ top, src }) {
  const image = useRef(null);
  const imageSpinner = useRef(null);

  const removeImageSpinner = () => {
    imageSpinner.current.style.display = 'none';
  };

  return (
    <div className="ad-container">
      {top && <Text strong>But first, a word from our sponsors:</Text>}
      <img
        alt="ad from our sponsors"
        ref={image}
        className="ad"
        src={`${baseUrl}ads/?r=${src}`}
        onLoad={removeImageSpinner}
      />
      <div ref={imageSpinner}>
        <Spin tip="Loading ad..." indicator={<Icon type="loading" spin />} />
      </div>
    </div>
  );
}
