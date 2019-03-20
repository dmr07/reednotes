import React from "react"
import {Link} from "react-router-dom"
import "./Footer.styl";
import logo from "../../client/media/logo1.png"

const Footer = () => (
  <footer>
    <div class="footer">
      <div class="footer-msg">{'\u2014'}&nbsp; Designed and Built by &nbsp;{'\u2014'}</div>
      <div class="footer-sig">Daniel M. Reed</div>
      <span class="copyright">{'\u00A9'}</span><span class="copytype"> 2019 Daniel Reed &nbsp; | &nbsp; All Rights Reserved</span>
    </div>
  </footer>
)

      // <div class="copytype">All Rights Reserved</div>

export default Footer