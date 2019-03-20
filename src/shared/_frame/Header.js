import React from "react"
import {Link} from "react-router-dom"
import "./Header.styl";
import logo from "../../client/media/logo1.png"

const Header = () => (
  <header>
    <nav>
        <ul class="navigation">
          <Link to="/"><div class="nav-sig">ReedNotes</div></Link>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/design">Design</Link></li>
          <li><Link to="/thingsilove">Things I Love</Link></li>
          <li><Link to="/friends">Friends</Link></li>
          <li><Link to="/memoir">Memoir</Link></li>
        </ul>
    </nav>
  </header>
)

export default Header