import React from "react";

//добавил Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import TestNavbar from "./TestNavbar/TestNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/*Есть route и есть routeS. Нужно юзать Routes и внём задавать Route*/}
        <Routes>
          {/*Цытата из stackoverflow: In V6, you can't use the component prop anymore. It was replaced in favor of element:*/}
          {/*component={TestNavbar} - component устарел и не работает*/}
          <Route path="/" element={<TestNavbar />} />
          <Route path="/gallery" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
