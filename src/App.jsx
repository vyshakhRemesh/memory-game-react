import "./App.css";
// import MemoryGame from "./pages/MemoryGame.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ClassicGame from "./pages/ClassicGame.jsx";
import TimedGame from "./pages/TimedGame.jsx";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classic" element={<ClassicGame />} />
        <Route path="/timed" element={<TimedGame />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
