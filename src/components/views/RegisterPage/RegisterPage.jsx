import React, { useState } from "react";
import axios from "axios";
function RegisterPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nick, setNick] = useState("");
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onNickHandler = (event) => {
    setNick(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email,
      password,
      nick,
    };

    axios
      .post("https://www.jmsteady.net/auth/join", body, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.success) {
          props.history.push("/");
        } else {
          alert("회원가입 실패");
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
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="text" value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <label>Nick</label>
        <input type="text" value={nick} onChange={onNickHandler} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default RegisterPage;
