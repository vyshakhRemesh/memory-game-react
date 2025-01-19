import "./App.css";
// import MemoryGame from "./pages/MemoryGame.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ClassicGame from "./pages/ClassicGame.jsx";
import TimedGame from "./pages/TimedGame.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classic" element={<ClassicGame />} />
        <Route path="/timed" element={<TimedGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
