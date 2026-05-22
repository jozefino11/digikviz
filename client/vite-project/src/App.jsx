import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import KvizComponent from "./KvizComponent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/kviz/:id" exact element={<KvizComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
