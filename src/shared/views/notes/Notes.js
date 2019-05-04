import React, { Component } from "react";
import NotesList from "./NotesList";
import './Notes.styl';
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

    this.state = { 
      initialData: initialData,
      notes: initialData 
    };
  }
  componentWillReceiveProps(newProps) {
    console.log("called")
    console.log(newProps)
    if (newProps.match.params.topic) {
      console.log("specific")
      let topic = newProps.match.params.topic;
      let results = this.state.initialData.filter(article => article.topics.includes(topic))
      this.setState({ notes: results })
    } else {
      console.log("general")
      this.setState({ notes: this.state.initialData })
    }
  }
  componentDidMount() {
    if (!this.state.notes) {
      Notes
        .requestInitialData()
        .then((data) => {
          console.log(data)
          this.setState({ initialData : data });
          let params = this.props.match.params
          if ( params && params.topic ) {
            let topic = this.props.match.params.topic;
            let results = data.filter(article => article.topics.includes(topic))
            this.setState({ notes: results })
          } else {
            this.setState({ notes: data })
          }
          
        });
    }
  }

  static requestInitialData() {
    return fetch("http://127.0.0.1:3000/api/news")
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { notes } = this.state;
    return (
      <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Notes</title>
          <link rel="canonical" href="http://reednotes.com/notes" />
      </Helmet>

      <div className="notes-list">
        <NotesList 
          news={notes} 
          />
      </div>
      </div>
      );
  }
}

      // <div className="topic-list">
      //   <div className="topic-header">BROWSE</div>
      //   <div className="topic-item active">All</div>
      //   <div className="topic-item">Software</div>
      //   <div className="topic-item">Startups</div>
      //   <div className="topic-item">Management</div>
      //   <div className="topic-item">Physics</div>
      //   <div className="topic-item">Other</div>
      // </div>

export default Notes;
