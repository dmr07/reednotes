import React from "react"
import {Link} from "react-router-dom"
import "./Footer.styl";
import logo from "../../client/media/logo1.png"

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-msg">{'\u2014'}&nbsp; Designed and Built by &nbsp;{'\u2014'}</div>
      <div className="footer-sig">Daniel Reed</div>
      <span className="copyright">{'\u00A9'}</span><span className="copytype"> 2019 Daniel Reed &nbsp; | &nbsp; All Rights Reserved</span>
    </div>
  </footer>
)

      // <div className="copytype">All Rights Reserved</div>

export default Footer