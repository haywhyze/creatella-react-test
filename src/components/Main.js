import React from "react";
import { Typography, PageHeader } from "antd";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

export default function Main() {
  const today = new Date();
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img
              src="https://creatella.ventures/wp-content/uploads/2016/03/creatella-logo-2x.png"
              alt="creatella logo"
            />
          </div>
        </Header>
        <Content>
          <PageHeader
            title="Products Grid"
            subTitle="Here you're sure to find a bargain on some of the finest ascii
          available to purchase. Be sure to peruse our selection of ascii faces
          in an exciting range of sizes and prices."
          />
          <div>
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
            <section className="products">... products go here ...</section>
          </div>
        </Content>
        <Footer>
          Creatella ©{today.getFullYear()} Created by Yusuf Abdulkarim
        </Footer>
      </Layout>
    </>
  );
}
