import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./ArtAndDesign.styl"
import {Helmet} from "react-helmet";
import PhotoGrid from "./PhotoGrid"
class ArtAndDesign extends Component {

  constructor(props) {
    super(props);

    let initialData;
    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }

    this.state = { 
      initialData: initialData,
      photoObjs: initialData 
    };
  }

  componentDidMount() {
    if (!this.state.photoObjs) {
      ArtAndDesign
        .requestInitialData()
        .then((data) => {
          console.log(data)
          this.setState({ initialData : data });
          // let params = this.props.match.params
          // if ( params && params.topic ) {
          //   let topic = this.props.match.params.topic;
          //   let results = data.filter(article => article.topics.includes(topic))
          //   this.setState({ objs: results })
          // } else {
            this.setState({ photoObjs: data })
          // }
          
        });
    }
  }

  static requestInitialData() {
    return fetch("http://127.0.0.1:3000/api/arts")
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { photoObjs } = this.state;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reed's Notes | Art & Design</title>
          <link rel="canonical" href="http://reedsnotes.com/artanddesign" />
        </Helmet>
        <div className="liabilityDisclaimer">
          <div className="limitations">Note</div>
          <span>
          UI works are purposely excluded in this exhibition.
          </span>
        </div>
        <div className="photo-list">
          <PhotoGrid 
            objs={photoObjs} 
            />
        </div>
      </div>
      )
  }
}

export default ArtAndDesign;