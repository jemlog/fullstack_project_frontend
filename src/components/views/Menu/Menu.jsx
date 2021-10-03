import { Menu } from "antd";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

function Sider(props) {
  let history = useHistory();
  const onLogoutHandler = (event) => {
    axios
      .get("https://www.jmsteady.net/auth/logout", { withCredentials: true })
      .then((response) => {
        if (response.data.success) {
          history.push("/login");
        } else {
          alert("로그아웃 실패");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="맛집 기록">
        <Menu.ItemGroup key="g1" title="Menu">
          <Menu.Item key="1" onClick={onLogoutHandler}>
            로그아웃
          </Menu.Item>

          <Menu.Item key="2">
            {" "}
            <Link to="/insert">게시글 추가 </Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default Sider;
