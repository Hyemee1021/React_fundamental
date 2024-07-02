import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/components/Home";

function App() {
  return (
    <BrowserRouter>
      {/* header is on evry pages */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
