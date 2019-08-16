import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Projects.styl"
      
class Projects extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>ReedNotes | Projects</title>
          <link rel="canonical" href="http://reednotes.com/friends" />
        </Helmet>
      </div>
      )
  }
}

export default Projects;