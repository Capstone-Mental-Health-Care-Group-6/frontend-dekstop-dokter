import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/fragments/Sidebar/Sidebar";
import Card from "./components/fragments/Card/Card";
// import "./App.css";
import rectangle1 from "./assets/Rectangle-460.svg";
import icon1 from "./assets/patient1.svg";

function App() {
  return (
    <>
      <Sidebar />
      <Card
        rectangle={rectangle1}
        iconCard={icon1}
        subtitle="Total Pasien"
        text="18 pasien"
      />
    </>
  );
}

export default App;
