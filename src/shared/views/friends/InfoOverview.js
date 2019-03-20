import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./home.css"
      
class InfoOverview extends Component {
  render() {
    return (
        <Helmet>
          <meta charSet="utf-8" />
          <title>ReedNotes | Friends</title>
          <link rel="canonical" href="http://reednotes.com/friends" />
        </Helmet>
      )
  }
}

export default InfoOverview;