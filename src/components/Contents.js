import React from "react";
import { PageHeader, Spin, Icon, Alert } from "antd";
import { Layout } from "antd";
import Products from "./Products";
import Ad from "./Ad";

const { Content } = Layout;

export default function Contents({ products, fetching }) {
  return (
    <Content>
      <PageHeader
        title="Products Grid"
        subTitle="Here you're sure to find a bargain on some of the finest ascii
          available to purchase. Be sure to peruse our selection of ascii faces
          in an exciting range of sizes and prices."
      />
      <div>
        <Ad top={true} />
        <Products products={products} />
        {products.length < 500 && fetching && (
          <Spin tip="Loading..." indicator={<Icon type="loading" spin />} />
        )}
        {products.length >= 500 && (
          <Alert message="~ end of catalogue ~" type="info" />
        )}
      </div>
    </Content>
  );
}
