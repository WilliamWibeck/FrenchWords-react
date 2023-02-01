import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./routes/Landing";
import Menu from "./components/Menu.js/Menu";
import Game from "./routes/Game";
import Authentication from "./routes/authentication";
import IdentifyForm from "./routes/IdentifyForm/IdentifyForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/game/:category" element={<Game />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/identifyform" element={<IdentifyForm />} />
    </Routes>
  );
}

export default App;
