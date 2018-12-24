import React, { Component } from "react";
import "isomorphic-fetch";

class PropertyCard extends Component {
  constructor(props) {
    super(props);

    let initialData;
    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }

    this.state = { news: initialData };
  }

  componentDidMount() {
    if (!this.state.news) {
      News.requestInitialData().then(data => this.setState({ news: data }));
    }
  }

  static requestInitialData() {
    return fetch("http://127.0.0.1:3000/api/news")
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { news } = this.state;
    return (
      <div>
      <h2>This is the news page</h2>
      </div>
      );
  }
}

export default PropertyCard;
