/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  PageHeader, Spin, Icon, Alert, Layout,
} from 'antd';
import PropTypes from 'prop-types';

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
  endOfCatalogue,
  cache,
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
        {endOfCatalogue && !cache.length && (
          <Alert message="~ end of catalogue ~" type="info" />
        )}
      </div>
    </Content>
  );
}

Contents.propTypes = {
  topAd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  products: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      size: PropTypes.number,
      price: PropTypes.number,
      date: PropTypes.string,
      length: PropTypes.number,
    }),
  ])).isRequired,
  fetching: PropTypes.bool.isRequired,
  endOfCatalogue: PropTypes.bool.isRequired,
  initialFetching: PropTypes.bool.isRequired,
  setSort: PropTypes.func.isRequired,
  cache: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      size: PropTypes.number,
      price: PropTypes.number,
      date: PropTypes.string,
      length: PropTypes.number,
    }),
  ])).isRequired,
};
