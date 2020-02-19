import React, { useRef } from 'react';
import { Typography, Spin, Icon } from 'antd';
import PropTypes from 'prop-types';
import { baseUrl } from '../api';

const { Text } = Typography;

export default function Ad({ top, src }) {
  const imageSpinner = useRef(null);

  const removeImageSpinner = () => {
    imageSpinner.current.style.display = 'none';
  };

  return (
    <div className="ad-container">
      {top && <Text strong>But first, a word from our sponsors:</Text>}
      <img
        alt="ad from our sponsors"
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

Ad.propTypes = {
  top: PropTypes.bool.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
