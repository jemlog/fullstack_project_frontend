import React, { useState } from "react";
import { Button, Input } from "antd";

import axios from "axios";
import "./AddPage.css";
const { TextArea } = Input;

function AddPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onDescriptionHandler = (event) => {
    setDescription(event.currentTarget.value);
  };

  const onImgChange = (event) => {
    setFile(event.target.files[0]);
  };
  // 3.38.96.197
  const onSubmitHandler = (event) => {
    console.log("click");
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("img", file);
    formdata.append("title", title);
    formdata.append("description", description);
    axios
      .post("https://www.jmsteady.net/post", formdata, {
        withCredentials: true,
      })
      .then(() => {
        console.log("클라이언트 쪽에서는 전달됬어");
        props.history.push("/");
      });
  };

  return (
    <div className="form_class">
      <form onSubmit={onSubmitHandler}>
        <div className="element">
          <label htmlFor="title">
            <h2>제목</h2>
          </label>
          <Input
            size="large"
            placeholder="title"
            type="text"
            id="title"
            value={title}
            onChange={onTitleHandler}
          />
        </div>
        <div className="element">
          <label htmlFor="description">
            <h2>본문</h2>
          </label>
          <TextArea
            size="large"
            id="description"
            placeholder="description"
            cols="30"
            rows="5"
            value={description}
            onChange={onDescriptionHandler}
          ></TextArea>
        </div>
        <div className="element">
          <input type="file" accept="image/*" onChange={onImgChange} />
        </div>

        <Button type="primary" size="large" htmlType="submit">
          제출
        </Button>
      </form>
    </div>
  );
}

export default AddPage;
