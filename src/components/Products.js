import React from "react";
import Product from "./Product";
import Ad from "./Ad";
import { Divider } from "antd";

export default function Products({ products }) {
  return (
    <div className="products">
      {products.length
        ? products.map((p, i) => {
            if ((i % 20 === 0) & (i !== 0)) {
              return (
                <React.Fragment key={p.id}>
                  <Divider />
                  <Ad top={false} />
                  <Divider />
                  <Product product={p} />
                </React.Fragment>
              );
            }
            return <Product key={p.id} product={p} />;
          })
        : null}
    </div>
  );
}
