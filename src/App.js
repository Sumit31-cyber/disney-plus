import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
