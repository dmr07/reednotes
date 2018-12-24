import React from "react"
import {Link} from "react-router-dom"
import "./Footer.styl";
import logo from "../../client/media/logo1.png"

const Footer = () => (
  <footer>
    <div class="footer">
      <div class="footer-msg">Designed & Built by</div>
      <div class="footer-sig">Daniel Reed</div>
      <span class="copyright">{'\u00A9'}</span><span class="copytype"> Daniel Reed 2018</span>
    </div>
  </footer>
)

export default Footer