import React from "react";
import { Typography, PageHeader } from "antd";

const { Text } = Typography;

export default function Main() {
  return (
    <>
      <header>
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)"
          }}
          onBack={() => null}
          title="Products Grid"
          subTitle="Here you're sure to find a bargain on some of the finest ascii
          available to purchase. Be sure to peruse our selection of ascii faces
          in an exciting range of sizes and prices."
        />
        <Text strong>But first, a word from our sponsors:</Text>
        <br />
        <img
          className="ad"
          src={
            "http://localhost:3000/ads/?r=" +
            Math.floor(Math.random() * 1000) +
            ""
          }
        />
      </header>

      <section className="products">... products go here ...</section>
    </>
  );
}
