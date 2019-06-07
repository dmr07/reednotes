import React, {Component} from "react";
import {Link} from "react-router-dom";
import Scroll from "react-scroll";
import "./Memoir.styl";
import {Helmet} from "react-helmet";

class Memoir extends Component {
  componentDidMount() {
    // <div className="author"><span>by</span> Daniel M. Reed</div>
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
        <div className="body-content">
          <div className="timestamp">June 2018</div>
          <div className="header">My Formative Years</div>
          <p className="paragraphs">
            At one point my parents and I lived near an oil refinery. Mother wasn't so fond of that fact, it never didn't bothered me as much; the place quickly grew on me. This was at the outskirts of San Francisco, a charming little town of twenty-six thousand residents, a place where you knew the regulars on a first-name basis, and where everyday felt like a sunny afternoon. Back then mom and dad worked in the wine business, and every so often I got to tag along to Napa Valley or wherever {'\u2014'} I cherished every moment. 
            <br></br>
            <br></br>
            We lived in a little two story townhouse that overlooked golden hills that rolled on for miles across the Carquinez Strait {'\u2014'} the sweet summer breeze, the dusty sun-spotted trails, the trains that would encircle. At nights by the town dock, I would sit and quietly gaze at the stars. The leaves rustled in the wind.
            <br></br>
            <br></br>
            On days I didn't have school I took every opportunity to slink off to Berkeley. I loved auditing lectures, and this drove the attendance person crazy. It was also at Berkeley that I got a first glimpse of how palpable technology are. By the time I entered college, I was so set on starting a tech company that I didn't end up staying for very long. Around junior year, I got antsy, and boarded a plane to Boston.
            <br></br>
            <br></br>
            This little project I worked on in my early twenties with my dear friends Will and Sergei has been the center-fold of my life thus far. The advent of HTML5 video in 2011 brought about an opportunity to link powerful object tracking and identification technology with in-video interaction. We scrambled to get working prototypes and to secure initial interest. Will was at Harvard at the time and got us funded; he was a big source of our early momentum. Admittedly I was very lucky to have had such wonderful partners and to have been in that area. 
            <br></br>
            <br></br>
            During my stint, I served as Partner, President of Product, and when Will went to Shanghai to set up a distribution arm, CEO. It was not easy to run a company in my early twenties. Even on my very last day, I could not then say I had fully adjusted {'\u2014'} it was an unsteady experience plagued with crippling self-doubt, inadequacy, and perpetual anxiety. It was also a period where I made more mistakes than I thought humanly possible. These events are ever imprinted in my mind, and as visceral and poignant as any day I recollect. The venture ultimately proved too much of an R&D project to be sustainable, but the technology we developed early on lives on in China as VideoJJ. 
            <br></br>
            <br></br>
            The difficulty is in reconciling just how ephemeral and finite things are -- in technology, in life. It is occasionally comforting to stop and look back, to reminisce, even though it is not the most productive thing in the world. To see a younger self, the asperiations he once held, and after many years, they still hold true to some sense. 
          </p>
        </div>
      </div>
      )
  }
}

// I dearly miss working with my team, and to have worked on a technology that scarcely existed at the time, 
//              end, I'm grateful to say I was part of the team that ushered in a few truly innovative products that scarcely existed at the time, and pulling the company out of a year-long nose-dive that nearly ended in our demise. Still, I dearly miss work with the friends with whom I embarked on this adventure and have met along the way.
// As years pass, the rear-view mirror only become more blury until things go entirely out of view. Undoubtedly the shapes we do see we decide the brush strokes to color in our own memories, even in this -- to give things meaning. 
export default Memoir;