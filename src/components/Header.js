import React from "react";
import { Layout } from "antd";

export default function Header() {
  return (
    <Layout.Header>
      <div className="logo">
        <img
          src="https://creatella.ventures/wp-content/uploads/2016/03/creatella-logo-2x.png"
          alt="creatella logo"
        />
      </div>
    </Layout.Header>
  );
}
