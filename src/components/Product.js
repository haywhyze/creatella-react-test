import React from 'react';
import { Statistic, Tag } from 'antd';
import { formatPrice, formatDate } from '../helpers';

export default function Product({ product }) {
  return (
    <div className="face-card">
      <span className="face" style={{ fontSize: product.size }}>
        {product.face}
      </span>
      <Statistic value={formatPrice(product.price)} />
      <Tag color="#001529">{formatDate(product.date)}</Tag>
    </div>
  );
}
