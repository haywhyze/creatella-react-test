import React from 'react';
import { Divider, Spin, Icon } from 'antd';
import PropTypes from 'prop-types';
import Product from './Product';
import Ad from './Ad';

export default function Products({ products, fetching }) {
  return (
    <div className="products">
      {!fetching ? (
        products.map((p) => {
          if (p.src) {
            return (
              <React.Fragment key={p.id}>
                <Divider />
                <Ad top={false} src={p.src} />
                {p.src}
                <Divider />
              </React.Fragment>
            );
          }
          return <Product key={p.id} product={p} />;
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
