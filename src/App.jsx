import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/NavBar";
import TheTable from "./components/TheTable";

import "./styles/App.css";

const App = () => {
  const [currentCellColor, setCurrentCellColor] = useState("cyan");
  return (
    <>
      <Header />
      <Navbar
        currentCellColor={currentCellColor}
        setCurrentCellColor={setCurrentCellColor}
      />
      <TheTable
        currentCellColor={currentCellColor}
        setCurrentCellColor={setCurrentCellColor}
      />
    </>
  );
};

export default App;
