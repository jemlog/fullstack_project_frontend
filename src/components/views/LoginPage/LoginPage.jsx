import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Space } from "antd";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email,
      password,
    };

    axios
      .post("https://www.jmsteady.net/auth/login", body, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.success) {
          props.history.push("/");
        } else {
          alert("로그인 실패");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: "#e9ecef",
        padding: "30px",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <div className="element">
          <label>
            <h2>email</h2>
          </label>
          <Input
            type="text"
            size="large"
            value={email}
            placeholder="Email"
            onChange={onEmailHandler}
          />
        </div>
        <div className="element">
          <label>
            <h2>password</h2>
          </label>
          <Space direction="vertical">
            <Input.Password
              placeholder="input password"
              size="large"
              value={password}
              onChange={onPasswordHandler}
            />
          </Space>
        </div>
        <div className="element">
          <Button htmlType="submit" type="primary">
            Login
          </Button>
        </div>
      </form>
      <Link to="/register">회원가입</Link>
    </div>
  );
}

export default LoginPage;
