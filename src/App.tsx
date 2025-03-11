import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import CricScore from "./assets/Pages/CricScore";
import CurrentMatches from "./assets/Pages/CurrentMatch";
import PlayersList from "./assets/Pages/PlayersList";
import SeriesList from "./assets/Pages/SeriesList";
import SeriesSearch from "./assets/Pages/SeriesSearch";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CricScore />} />
        <Route path="Current" element={<CurrentMatches />} />
        <Route path="Player" element={<PlayersList />} />
        <Route path="SeriesList" element={<SeriesList />} />
        <Route path="SeriesSearch" element={<SeriesSearch />} />
      </Routes>
    </div>
  );
}

export default App;
