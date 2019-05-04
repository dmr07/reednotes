import React, {Component} from "react";
import {Link} from "react-router-dom";
import HomePosterSlider from "./HomePosterSlider"
import {Helmet} from "react-helmet";
import {Grid, Row, Col} from "react-bootstrap"
import pic from "../../../client/media/profile-cr.jpg"
import "./Home.styl";


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
  }

  componentDidMount() {
    console.log('mounted');
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
      <div className="home-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>ReedNotes | Home</title>
          <link rel="canonical" href="https://reednotes.com" />
        </Helmet>
        
        <div className="profile-wrapper">
            <img className="profile-photo" src={pic} />
        </div>
        <div className="paragraph-intro">
            Hi I'm Dan,
            <div className="pbreak"></div>
            <div className="pbreak"></div>
            This is my <a className="more-link" href="#">personal</a> blog, where I share the things I'm learning and things I'm thinking about. Feel free to email me, I have a standing invitation.
            <div className="pbreak"></div>
            I used to be a software exec in Los Angeles / Boston. These days I'm in Vancouver. I develop occasionally, mostly in tinkering with neural nets. I did my undergrad in math & physics at UBC. 
            <br></br>
            <span className="bar">_______</span>
            <div className="sub-info">
              <span className="about-site">About This Website</span> Hand-built using React and Node. WordPress would have been the more sensible choice, came to mind after after much had been built. 
            </div>
        </div>
      </div>
      )
  }
}

        // <div className="intro">R</div>


        // <Slider {...settings} className="home-info">
        //   {this.state.infolist && this.state.infolist.map((item,i) => 
        //     <div className="info-col" key={i}>
        //       <h3>{item.title}</h3>
        //       <p>{item.descr}</p>
        //     </div>
        //   )}
        // </Slider>

            // <br></br>
            // <br></br>
            // I love beautiful things ~ beautiful designs, theorems, music. Left unchecked, to say they are a compulsion is a gross understatement.
export default Home;