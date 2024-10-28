import { Link } from "react-router-dom";

import "../pages/pages.css";

function NotFound() {
  return (
    <div id="not-found">
      <div className="error">
        <h1>Oooooops! <br></br> This page does not exist. 🕵️</h1>
        <h3 className="grey">Too bad! I can help you get back to the homepage though. </h3>
        <Link to="/">
          <button className="secondary-button">Go to homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
