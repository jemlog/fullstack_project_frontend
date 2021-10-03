import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

function Searching(props) {
  return (
    <div>
      <Space direction="vertical">
        {/* <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 200 }}
        /> */}
        {/* <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        /> */}
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: "40rem" }}
        />
        {/* <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        /> */}
      </Space>
    </div>
  );
}

export default Searching;
