import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ContactPage from "./ContactPage"; // Import ContactPage here

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />{" "}
        {/* Add route here */}
      </Routes>
    </>
  );
}

export default App;
