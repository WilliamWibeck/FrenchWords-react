import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./routes/Landing";
import Menu from "./components/Menu.js/Menu";
import Game from "./routes/Game";
import Authentication from "./routes/authentication";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/game/:category" element={<Game />} />
      <Route path="/login" element={<Authentication />} />
    </Routes>
  );
}

export default App;
