import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div id="not-found">
      <Navbar />
      <Sidebar />

      <div className="error">
        <h1>Oooooops! <br></br> This page does not exist. 🕵️</h1>
        <h3 className="grey">Too bad! I can help you get back to the homepage though. </h3>
        <Link to="/">
          <button className="secondary-button">Go to homepage</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
