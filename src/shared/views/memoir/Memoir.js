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
          <div className="header">Formative Years</div>

          <p className="paragraphs">
          [too self important] [goal is to seem likeable]
            I suppose you'd like to know a bit more about me {'\u2014'} how I've <i>become</i> who I am rather than outright what I am. Interpolation is best left for the readers, but regretably authors have all too much power in crafting between the lines. Some memories are rosier than others, some I choose to forget altogether. The narrative of my past are contrived, consciously or otherwise, as all narratives are, and therefore cannot fully account for whom I've become, if such things exist. Rather, I believe it is the vivid imagery of the failures, the embarrassments, that chiefly shape one's character. As it is my blog, What I make public are the things I cherish, and at times I will not prioritize clarity or value to outsiders over my own personal reasons. Extrapolate and compare at your risk. 
            <br></br>
             I find difficulty in reconciling just how ephemeral and finite things are, in technology as is in life -- it can sometimes feel like peddling against quicksand. In these times it is occasionally comforting to stop and look back, to reminisce. To see a younger self and the asprirations he held, and that after nearly a decade, those same aspirations still kindle a sense of purpose, as true as an arrow, as they once did. 
            <br></br>
            At one point my parents and I lived near an oil refinery. Mother wasn't so fond of that fact, it never didn't bothered me as much; the place quickly grew on me. This was at the outskirts of San Francisco, a charming little town of twenty-six thousand residents, a place where you knew the regulars on a first-name basis, and where everyday felt like a sunny afternoon. Back then mom and dad worked in the wine business, and every so often I got to tag along to Napa Valley or wherever {'\u2014'} I cherished those days. 
            <br></br>
            <br></br>
            We lived in a little two story townhouse that overlooked golden hills that rolled on for miles across the Carquinez Strait {'\u2014'} the sweet summer breeze, the dusty sun-spotted trails, the trains that would encircle. At nights by the town dock, I would sit and quietly gaze at the stars. The leaves rustled in the wind.
            <br></br>
            <br></br>
            On days I didn't have school I took every opportunity to slink off to Berkeley. I loved auditing lectures, and this drove the attendance person crazy. It was also at Berkeley that I got a first taste of the excitement around technology. By the time I entered university, I was so set on starting a tech company that I didn't end up staying for very long. Around junior year, I got antsy, and boarded a plane to Boston. 
            <br></br>
            <br></br>
            This project I worked on in my early twenties with my dear friends Will and Sergei has been the center-fold of my life thus far. The advent of HTML5 video in 2011 brought about an opportunity to link powerful object tracking and identification technology with online video interaction. We scrambled to get working prototypes and to secure initial interest. Will, at Harvard at the time, got us funded and eventually dropped out like I did to pursue this full-time; he was a big source of our early momentum. Admittedly I was very lucky to have had such wonderful partners and to have been in Boston at that time. 
            <br></br>
            <br></br>
            These years are perhaps the most eye-opening and formative years I have had to date. During my stint, I served as Partner, President of Product, and when Will left for Shanghai to set up a distribution arm, CEO. The expectations to meet payroll, develop the product, and acquire users were overwhelming. To my very last day and even long after, there was always a steady cadence self-doubt, inadequacy, and anxiety. [It was also a period where I made more mistakes than I thought humanly possible. Some events in that period, details of which I will spare for my own sanity, are imprinted in my mind as viscerally and poignant as any day I can recollect.][Who cares, no detail at all.] The venture ultimately proved too much of an R&D project to be sustainable in North America, but the technology we developed early on lives on in China (due to cheaper labor and better funding) as VideoJJ.
            <br></br>
            <br></br>
            As for me, I took some time off to attend pursuits I had been putting off. 

           
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