import React from "react";
import { Link } from "react-router-dom";
import img from "../assest/Fimg.png"; // Assuming the image is in the same directory as this component
import "./Home.css"; // Create a new CSS file for styling

function Home(props) {
  return (
    <div className="home-container">
      <div className="left-side">
        <img src={img} alt="Image Description" />
      </div>

      <div className="right-side">
        <h1>
          <Link to="/signup">Register</Link>
        </h1>
        <br />
        <h1>
          <Link to="/login">Login</Link>
        </h1>
         <br/>
        <h1>{props.name ? `Welcome - ${props.name}` : "Login please"}</h1>
      </div>

      <br />
      <br />
      <br />

    
    </div>
  );
}

export default Home;
