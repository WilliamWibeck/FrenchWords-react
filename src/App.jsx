import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./routes/Landing";
import Menu from "./components/Menu.js/Menu";
import Game from "./routes/Game";
import Authentication from "./routes/authentication";
import IdentifyForm from "./routes/IdentifyForm/IdentifyForm";
import TranslateParagraph from "./routes/TranslateParagraph/TranslateParagraph";
import Dashboard from "./routes/Dashboard";
import { NextUIProvider } from "@nextui-org/react";
import LandingUpdated from "./routes/LandingUpdated";

function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path="/" element={<LandingUpdated />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/game/:category" element={<Game />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/identifyform" element={<IdentifyForm />} />
        <Route path="/translateparagraph" element={<TranslateParagraph />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
