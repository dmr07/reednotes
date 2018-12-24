import React, {Component} from "react";
import {Link} from "react-router-dom";
import HomePosterSlider from "./HomePosterSlider"
import {Helmet} from "react-helmet";
import {Grid, Row, Col} from "react-bootstrap"
import pic from "../../../client/media/profile-cr.jpg"
import "./Home.styl";
import {investorPerks, residentPerks} from "./InvestorFeatures.js"

import Slider from "react-slick";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("constructing home");
    this.state = {
      activeInfoSlide : "Investor",
      infolist : investorPerks
    }

    this.handleChangePerks = this.handleChangePerks.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
  }

  handleChangePerks() {
    console.log("click heard");
    if (this.state.activeInfoSlide === "Investor") {
      // this.state.infolist = homebuyerPerks;
      // this.state.activeInfoSlide = "Homebuyer";
      this.setState({
        activeInfoSlide: "Resident", 
        infolist: residentPerks
      })
    } else {
      // this.state.infolist = investorPerks;
      // this.state.activeInfoSlide = "Investor";
      this.setState({
        activeInfoSlide: "Investor", 
        infolist: investorPerks
      })
    }
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      autoplaySpeed: 3000,
      autoplay: true,
      pauseOnHover: false,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 1
    };
              // <div className="info-label">{this.state.activeInfoSlide}</div>

    return (
      <div class="home-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>ReedNotes | Home</title>
          <link rel="canonical" href="https://reednotes.com" />
        </Helmet>
        <div class="profile-wrapper">
            <img className="profile-photo" src={pic} />
        </div>
        <div class="intro">Hi. I'm Dan</div>
        <div class="paragraph-intro">
            I'm studying mathematics and physics at the University of British Columbia. Previously I headed a team that develops computer vision technologies in Cambridge, MA. In my spare time I like to jam on my guitar and dig through old philosophy books in search of ancient wisdom. <a href="#">More about me</a>
            <br></br>
            <span class="bar">_______</span>
            <div class="sub-info">
              <b>About This Website</b> ReedNotes is a crawlable React single-page-application (SPA), hosted on a Node server, and bundled using Webpack. Designed and built by Dan.
            </div>
        </div>


      </div>
      )
  }
}

        // <Slider {...settings} class="home-info">
        //   {this.state.infolist && this.state.infolist.map((item,i) => 
        //     <div className="info-col" key={i}>
        //       <h3>{item.title}</h3>
        //       <p>{item.descr}</p>
        //     </div>
        //   )}
        // </Slider>

export default Home;