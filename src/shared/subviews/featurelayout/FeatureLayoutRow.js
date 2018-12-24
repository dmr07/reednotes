import React, { Component } from "react";

// props construction 
// feature = {
//    header: String,
//    body: String,
//    image: Image
// }

class FeatureLayoutRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featurelayout-container">
        <h2 className="featureLayout-props-header">{this.props.feature.header}</h2>
        <p className="featureLayout-props-body">{this.props.feature.body}</p>
        <figure></figure>
      </div>
    )
  }

}

export default FeatureLayoutRow;