import React from 'react';
import { Divider, Spin, Icon } from 'antd';
import PropTypes from 'prop-types';
import Product from './Product';
import Ad from './Ad';

export default function Products({ products, fetching }) {
  return (
    <div className="products">
      {!fetching ? (
        products.map((item) => {
          // if item has src attribute, return an ad
          if (item.src) {
            return (
              <React.Fragment key={item.id}>
                <Divider />
                <Ad top={false} src={item.src} />
                {item.src}
                <Divider />
              </React.Fragment>
            );
          }
          return <Product key={item.id} product={item} />;
        })
      ) : (
        <Spin tip="Loading..." indicator={<Icon type="loading" spin />} />
      )}
    </div>
  );
}

Products.propTypes = {
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
      map: PropTypes.func,
    }),
  ])).isRequired,
  fetching: PropTypes.bool.isRequired,
};
