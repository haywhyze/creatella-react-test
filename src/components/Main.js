import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function Main() {
  return (
    <>
      <header>
        <Title>Products Grid</Title>
        <Paragraph>
          Here you're sure to find a bargain on some of the finest ascii
          available to purchase. Be sure to peruse our selection of ascii faces
          in an exciting range of sizes and prices.
        </Paragraph>
        <Text strong>But first, a word from our sponsors:</Text>
        <Divider />
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
