import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
