import React, { useState, useEffect } from "react";
import Product from "./Product";
import Ad from "./Ad";
import { Divider, Spin, Icon } from "antd";

export default function Products({ products, fetching, topAd }) {

  return (
    <div className="products">
      {!fetching ? (
        products.map(p => {
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
