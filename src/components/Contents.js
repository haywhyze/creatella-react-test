/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  PageHeader, Spin, Icon, Alert,
  Layout,
} from 'antd';

import Products from './Products';
import Ad from './Ad';
import SortButtons from './SortButtons';

const { Content } = Layout;

export default function Contents({
  topAd,
  products,
  fetching,
  initialFetching,
  setSort,
}) {
  return (
    <Content>
      <PageHeader
        title="Products Grid"
        subTitle="Here you're sure to find a bargain on some of the finest ascii
          available to purchase. Be sure to peruse our selection of ascii faces
          in an exciting range of sizes and prices."
      />
      <div>
        <Ad top src={topAd} />
        <SortButtons setSort={setSort} />
        <Products
          products={products}
          fetching={initialFetching}
          topAd={topAd}
        />
        {fetching && (
          <Spin tip="Loading..." indicator={<Icon type="loading" spin />} />
        )}
        {products.length >= 525 && (
          <Alert message="~ end of catalogue ~" type="info" />
        )}
      </div>
    </Content>
  );
}
