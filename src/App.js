import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import '../src/App.css'
import MemoryLane from "./pages/Memories";
import BirthdayCake from "./pages/BirthdayCake";
import TypingEffectPage from "./pages/TypingEffectPage";
import SongsPage from "./pages/SongsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<MemoryLane />} />
        <Route path="/birthday" element={<BirthdayCake />} />
        <Route path="/message" element={<TypingEffectPage />} />
        <Route path="/song" element={<SongsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
