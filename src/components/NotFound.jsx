import React from "react";
import "../NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    
      <div className="notfound-container">
        <div className="not-found"></div>
        <Link to="/">
          <button className="btn-notfound">Back to Home</button>
        </Link>
      </div>
    
  );
};

export default NotFound;
