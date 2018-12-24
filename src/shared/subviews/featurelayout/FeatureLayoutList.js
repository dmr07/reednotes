import React, { Component } from "react";
import "./NewsList.css";

class FeatureLayoutList extends Component {
  render() {
    return (
      {this.props.features &&
        this.props.features.map((feature, i) => 
          <FeatureLayout feature={feature} idx={i}></FeatureLayout>
        )}
    )
  }
}

export default NewsList;
