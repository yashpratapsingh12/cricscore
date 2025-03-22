import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import CricScore from "./assets/Pages/CricScore";
import CurrentMatches from "./assets/Pages/CurrentMatch";
import PlayersList from "./assets/Pages/PlayersList";
import SeriesList from "./assets/Pages/SeriesList";

import CricNews from "./assets/Pages/CricNews";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CricScore />} />
        <Route path="Current" element={<CurrentMatches />} />
        <Route path="Player" element={<PlayersList />} />
        <Route path="SeriesList" element={<SeriesList />} />
        <Route path="CricNews" element={<CricNews />} />
      </Routes>
    </div>
  );
}

export default App;
