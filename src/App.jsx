import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/listing/:id" element={<div>Details</div>} />
        <Route path="/favorites" element={<div>Favorites</div>} />
        <Route path="/bookings" element={<div>Bookings</div>} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;