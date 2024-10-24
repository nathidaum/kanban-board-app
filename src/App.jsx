import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <div id="homepage">
      <Navbar />
      <Sidebar />

      <Footer />

      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
