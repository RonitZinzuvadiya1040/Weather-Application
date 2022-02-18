import React from "react";
import { Link } from "react-router-dom";

import "./Layout.css";


const Layout = () => {
  
  return (
    <div>
      
      <header className="header">
        
        <div className="logo">

          <Link to="/">
            Weather Application
          </Link>

        </div>

        <nav className="navigation">
          
          <ul>
         
            <Link to="/addWeather">Add Weather Information</Link>
            <Link to="/allweather">View Weather Information</Link>     

          </ul>

        </nav>
        
      </header>
      
    </div>
  );
};

export default Layout;