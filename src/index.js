import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Rules from "./components/Rules.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/normal"} element={<Main />} />
      <Route path={"/hard"} element={<Main hard={true} />} />
      <Route path={"/rules"} element={<Rules />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
