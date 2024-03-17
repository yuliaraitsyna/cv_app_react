import "../../styles/Resume.css";
import React from "react";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resume-container">
        <div id="resume">
          <h1>Resume</h1>
          <h3 id="full-name"></h3>
          <div className="container">
            <p id="email"></p>
            <p id="phone-number"></p>
            <p id="location"></p>
          </div>
          <div id="education-section">
            <h2>Education</h2>
  
          </div>
          <div id="experience-section">
            <h2>Experience</h2>
          </div>
        </div>
      </div>
    );
  }
}
