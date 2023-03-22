import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/NavBar";
import TheTable from "./components/TheTable";

import "./styles/App.css";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <TheTable />
    </>
  );
};

export default App;
