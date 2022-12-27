import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex justify-center items-center h-screen font-kumbh">
      <div className="max-w-7xl h-full w-full">
        <NavBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
