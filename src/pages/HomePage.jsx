import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

export class HomePage extends Component {

  render() {
    return (
      <div className="homepage">
        <div id="page">
          <div className="main">
            <div className="main-content">
              <div className="main-text-container1">
                <div className="main-text">Our Mission</div>
                <br></br>
                <div className="main-text">We aim to find the best companions</div>
                <div className="main-text">for homeless pets in need</div>
                <br></br>
              </div>
              <div className="main-buttons">
                <button className="main-button-donate">DONATE</button>
                <NavLink to="/adopt">
                  <button className="main-button-adopt">ADOPT</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="white-container">
            <div className="main-text-container">
              <div className="main-text">Our Mission</div>
              <br></br>
              <div className="main-text">We aim to find the best</div>
              <div className="main-text">companions</div>
              <div className="main-text">for homeless pets in need</div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}