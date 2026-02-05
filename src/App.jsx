import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Import halaman utama dari Template BLK
// Pastikan folder 'views' sudah kamu copy ke dalam 'src' sebelumnya
import Index from "./views/examples/LandingPage.js"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Redirect sembarang link kembali ke home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;