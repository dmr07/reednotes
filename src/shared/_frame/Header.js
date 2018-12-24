import React from "react"
import {Link} from "react-router-dom"
import "./Header.styl";
import logo from "../../client/media/logo1.png"

const Header = () => (
  <header>
    <nav>
        <ul class="navigation">
          <Link to="/"><div class="nav-sig">ReedNotes</div></Link>
          <li><Link to="/">Memoir</Link></li>
          <li><Link to="/">Friends</Link></li>
          <li><Link to="/">Things I Love</Link></li>
          <li><Link to="/">Notes</Link></li>
          <li><Link to="/">Design</Link></li>
        </ul>
    </nav>
  </header>
)

export default Header