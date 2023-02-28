import { useState } from "react";
import CompareModal from "./components/CompareModal";
import FilterRole from "./components/FilterRole";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import Search from "./components/Search";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App bg-white">
      <Navbar />
      <Search />
      <FilterRole />
      <PlayerCard />
      <CompareModal open={openModal} />
    </div>
  );
}

export default App;
