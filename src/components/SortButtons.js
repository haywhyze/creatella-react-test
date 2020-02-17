import React from "react";
import { Radio, Typography } from "antd";

export default function SortButtons({ setSort }) {
  return (
    <div className="sort-container">
      <Typography.Text>Sort Items by: </Typography.Text>
      <br />
      <Radio.Group onChange={(e) => setSort(e.target.value)} defaultValue="a" buttonStyle="solid">
        <Radio.Button value="id">ID</Radio.Button>
        <Radio.Button value="price">Price</Radio.Button>
        <Radio.Button value="size">Size</Radio.Button>
        <Radio.Button value="">None</Radio.Button>
      </Radio.Group>
    </div>
  );
}
