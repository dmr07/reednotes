import React, {Component} from "react";
import {Link} from "react-router-dom";
import Scroll from "react-scroll";
import "./Memoir.styl";
import {Helmet} from "react-helmet";

class Memoir extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ReedNotes | Memoir</title>
          <link rel="canonical" href="http://reednotes.com/memoir" />
        </Helmet>
        <div class="body-content">
          <div class="timestamp">June 2018</div>
          <div class="header">A Memoir of Sorts</div>
          <div class="author"><span>by</span> Daniel M. Reed</div>
          <p class="paragraphs">
            My family lived near near an oil refinery at one point; mother wasn't fond of that location, though it didn't bother me so much; I kind of liked it rather. This was at the outskirts of San Francisco, the small town of twenty-six thousand people where people knew each other by first names, a town where everyday felt like a sunny afternoon. Mom and dad worked in the wine business, and every so often I got to tag along to Napa Valley or wherever {'\u2014'} I loved it. Our little two story town house overlooked golden hills that rolled on for miles across the Carquinez Strait {'\u2014'} the dry warm breeze, the dusty trails, the train that would encircle. At nights by the town dock bespeckled by palm trees, I would sit and quietly gaze at the stars. To this day, these are still among the happinest times in recent memory. 
            <br></br>
            <br></br>
            During summers I took every opportunity to slink off to Berkeley. I loved auditing lectures, and this drove the attendance person crazy. It was at Berkeley that I caught a sense of excitement about science and technology that has been with me ever since. By the time I matriculated to university, I had my eye so dead set on Silicon Valley that I didn't end up staying in school for very long. Around junior year, I got antsy, got on a plane to Boston and started software company.
            <br></br>
            <br></br>
            This company I started in my early twenties with my dear friend Will and Sergei has been the center-fold of my life thus far. The advent of HTML5 video in 2011 presented an opportunity to link powerful object tracking and identification technology with in-video interaction. We scrambled to get working prototypes and to secure initial interest. Will was at Harvard at the time and got us funded; he was a big source of our early momentum. Admittedly I was very lucky to have had such wonderful partners and to have been in that area. During my stint, I served as Partner, President of Product, and when Will went to Shanghai to set up a distribution arm, CEO. I oversaw the relocation of the head office to Los Angeles, where I served my remaining days. The people with whom I embarked on this journey and have met along the way are much the same people for whom I hold my deerest and warmest affection.
            <br></br>
            <br></br>
            At any rate, these are the notes in my melody, the formative years thus far if you will. There have been more follies and missteps along the way than I care to admit, but if given a chance to relive, none I would differently.
          </p>
        </div>
      </div>
      )
  }
}

export default Memoir;