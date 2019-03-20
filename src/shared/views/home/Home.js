import React, {Component} from "react";
import {Link} from "react-router-dom";
import HomePosterSlider from "./HomePosterSlider"
import {Helmet} from "react-helmet";
import {Grid, Row, Col} from "react-bootstrap"
import pic from "../../../client/media/profile-cr.jpg"
import "./Home.styl";
import {investorPerks, residentPerks} from "./InvestorFeatures.js"

import Slider from "react-slick";

// TO ADD: Hire me for design.
// Please note that I accept clients very sparingly, with the same process of evaluation. My primary criteria is whether I can meaningfully contribute to a vivid and compelling brand that aligns with the service or product. If you wish to engage me, my process is as follows:
// You will send me a prospectus, no more than page, containing the name and what you wish to convey in the logo and a brief description of the product written for the consumer. You will be asked to pay $795 retainer fee (deducted from the price if we decide to move forward). If I cannot examine your project within the specified time frame, I will refund the fee. Within a week I will respond with whether I wish to move forward. If I do, I will contact you in person or over the phone. Pricing will be determined once the specifications have been made clear.
// My fees range between $21,999 - $79,999. You will receive one final design, guidelines of use, all original digital copies for modification. I will also confer copyright of the work onto you or your organisation, but retain recognition of authorship. Through out the term of project, only in exceptional cases will work-in-progress be shown. If the above is acceptable, email me here.


// Design philosophy
// I love insignias that can be rendered in black and one, and still be beautiful. I don't believe beauty is subjective. There is a band of optimal visual complexity in patterns -- it's why the work of Jackson Pollock is so prized.
// I measure the success of design to be one that reaches an within range of the optimal visual complexity without the use of colors. It should be distinguishable as a shape -- as is all the great brands. 
// Ultimately I ask myself, is this a symbol I would be proud to have it were my company. If I can honestly say yes, than I will have achieved my highest aspiration as a designer.

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

    return (
      <div class="home-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>ReedNotes | Home</title>
          <link rel="canonical" href="https://reednotes.com" />
        </Helmet>
        
        <div class="intro">R</div>
        <div class="paragraph-intro">
            Hi I'm Dan,
            <div class="pbreak"></div>
            <div class="pbreak"></div>
            This is my personal blog. I write about things on my mind, most of which pertain to technology. 
            <div class="pbreak"></div>
            I'm a software executive, developer, and designer. I co-founded a computer-vision company and served from 2013-2016; I did some contracting after. I studied Mathematics & Physics at the University of British Columbia. I like to run and play music on my spare time. Currently I reside in Vancouver.
            <br></br>
            <br></br>
            <a class="more-link" href="#">More About Me</a>
            <br></br>
            <span class="bar">_______</span>
            <div class="sub-info">
              <span class="about-site">About This Website</span> Hand-built using React and Node. WordPress, the more sensible choice, came to mind after after much had been built. I apologize if the UX is not where it should be, but it's unlikely new features will be added as I will be busy with other engagements.
            </div>
        </div>


      </div>
      )
  }
}

// <div class="profile-wrapper">
//             <img className="profile-photo" src={pic} />
//         </div>

        // <Slider {...settings} class="home-info">
        //   {this.state.infolist && this.state.infolist.map((item,i) => 
        //     <div className="info-col" key={i}>
        //       <h3>{item.title}</h3>
        //       <p>{item.descr}</p>
        //     </div>
        //   )}
        // </Slider>

export default Home;