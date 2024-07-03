import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useCatFact from "./presenter/useCatfacts";
import Home from "../src/components/Home";

function App() {
  const { fact, error, loading } = useCatFact();

  if (loading) {
    return <div> "Please wait..."</div>;
  }
  if (error) {
    return <div> "Error..."</div>;
  }

  return <div>{fact}</div>;
}

export default App;
