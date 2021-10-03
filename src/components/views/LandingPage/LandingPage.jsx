import axios from "axios";
import Header from "../Header/Header";
import Searching from "../Search/Searching";
import React, { useEffect, useState } from "react";
import Sider from "../Menu/Menu";
import LandingData from "./LandingData";

function LandingPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.jmsteady.net/", { withCredentials: true })
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const dataList = data.map((data) => (
    <LandingData
      key={data.id}
      title={data.title}
      description={data.description}
      image={data.image}
    ></LandingData>
  ));
  return (
    <>
      <section style={{ display: "flex" }}>
        <Sider props={props}></Sider>

        <div
          style={{
            display: "flex",

            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Header></Header>
          <Searching></Searching>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "70%",
              flexDirection: "row",
              marginTop: "30px",
            }}
          >
            {dataList}
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
