import React, { Component } from "react";
import NotesList from "./NotesList";
import "isomorphic-fetch";
import {Helmet} from "react-helmet";

class Notes extends Component {
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
      <Helmet>
          <meta charSet="utf-8" />
          <title>News</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2>This is the news page</h2>
      <NotesList news={news} />
      </div>
      );
  }
}

export default Notes;
