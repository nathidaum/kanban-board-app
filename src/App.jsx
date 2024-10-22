import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="homepage">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
