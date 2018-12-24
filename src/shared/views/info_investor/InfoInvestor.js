import React, {Component} from "react";
import {Link} from "react-router-dom";
import Scroll from "react-scroll";
import "./InfoInvestor.styl";
import {Helmet} from "react-helmet";

let ScrollLink = Scroll.Link;
let Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;
let Element = Scroll.Element;

class InfoInvestor extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Investor</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>
        <ScrollLink activeClass="active" to="test1" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
          Test 1
        </ScrollLink>
        <ScrollLink activeClass="active" to="test2" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
          Test 1
        </ScrollLink>
        <ScrollLink activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
          Test 1
        </ScrollLink>
        <ScrollLink activeClass="active" to="test4" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
          <div className="testheight">
          Test 1
          </div>
        </ScrollLink>
        </div>
        <Element name="test1" className="element">
          <div className="testheight">
          Guy number 1
          </div>
        </Element>
        <Element name="test2" className="element">
          <div className="testheight">
        Guy number 2
          </div>
        </Element>
        <Element name="test3" className="element">
          <div className="testheight">
        Guy number 3
          </div>
        </Element>
        <Element name="test4" className="element">
          <div className="testheight">
        Guy number 4
          </div>
        </Element>
        </div>
      )
  }
}

export default InfoInvestor;