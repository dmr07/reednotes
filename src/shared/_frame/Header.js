import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./Header.styl";
import logo from "../../client/media/logo1.png"
import PropTypes from 'prop-types';

const Header = () => (
      <header>
        <nav>
            <ul className="navigation">
              <div className="topic-header">BROWSE</div>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/notes">Notes</Link></li>
                <div className="topic-list">
                  <Link to="/notes/software">
                    <div className="topic-item active">Software</div>
                  </Link>
                  <Link to="/notes/startups">
                    <div className="topic-item">Startups</div>
                  </Link>
                  <Link to="/notes/art">
                    <div className="topic-item">Design</div>
                  </Link>
                  <Link to="/notes/physics">
                    <div className="topic-item">Physics</div>
                  </Link>
                  <Link to="/notes/other">
                    <div className="topic-item">Other</div>
                  </Link>
                </div>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/artanddesign">Art & Design</Link></li>
              <li><Link to="/memoir">Memoir</Link></li>
            </ul>
        </nav>
      </header>
)

// Header.protoTypes = {
//   callback : PropTypes.func,
// }

          // <Link to="/"><div className="nav-sig">ReedNotes</div></Link>

export default Header