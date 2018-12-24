import React, { Component} from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {Carousel, Button} from "react-bootstrap";
import "./HomePosterSlider.styl";

class HomePosterSlider extends Component {
  constructor(props, context) {
    super(props, context);
  }
  // Real Estate, Commoditised.
  // <h1 className="poster-header">Rethink Real Estate.</h1>
  // <h1 className="poster-header">Smarter way to invest.</h1>
  // <h1 className="poster-header">A Richer Way to Live.</h1>

  render() {
    return (
      <div> 
      <Carousel
        interval={3000}
        pauseOnHover={false}
        controls={false}>
        <Carousel.Item>
          <div className="poster-label">Sydication</div>
          <h2 className="poster-descr">
            Invest in Vancouver real estate for as little as $50. Lease long-term with your deposit repaid in full.
          </h2>
          <Link className="poster-readmore" to="/how-it-works">How it works <span className="readmore-arrow">&#9701;</span></Link>
        </Carousel.Item>
        <Carousel.Item>
          <div className="poster-label">Investors</div>
          <h2 className="poster-descr">
            Diversify your risk by investing choosing how much and where you wish to invest.
          </h2>
          <Link className="poster-readmore" to="/how-it-works">How it works <span className="readmore-arrow">&#9701;</span></Link>
        </Carousel.Item>
        <Carousel.Item>
          <div className="poster-label">Residents</div>
          <h2 className="poster-descr">
            Long-term leases with fully-refundable deposity. Pay only land-tax and maintenance fees. 
          </h2>
          <Link className="poster-readmore" to="/how-it-works">How it works <span className="readmore-arrow">&#9701;</span></Link>
        </Carousel.Item>
      </Carousel>
      <div className="poster-calltoaction">
        <Link to="/learn/investor"><Button className="poster-btn main">Become an Investor</Button></Link>
        <Link to="/homebuyer"><Button className="poster-btn">Become a Homebuyer</Button></Link>
      </div>
      </div>
    )
  }
}

export default HomePosterSlider;