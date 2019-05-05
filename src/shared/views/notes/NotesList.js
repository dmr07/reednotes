import React, { Component } from "react";
import timeAgo from "node-time-ago";
import orderBy from "lodash/orderBy";
// import w18 from "./w18.png";
import "./NotesList.styl";

class NotesList extends Component {
  state = {
    sortOrder: "upvotes"
  };

  setOrder(order, event) {
    event.preventDefault();
    this.setState({ sortOrder: order });
  }

  render() {
    const news = orderBy(this.props.news, this.state.sortOrder, "desc");

    return (
      <div className="newslist">

        {news &&
          news.map(post =>
            <div key={post.id} className="news-item">
              <div className="note-title">{post.title}</div>
              <div className="note-topic">{post.topics[0]}</div>
              <div className="note-timestamp">{post.date}</div>
              <div className="note-body" dangerouslySetInnerHTML={{ __html: post.body }} />
              <div className="note-divider"></div>
            </div>
          )}
      </div>
    );
  }
}

                // <span className="news-position">{post.id}. ▲</span> {post.title}{" "}
        // <div className="header">
          // <div className="header-title">
            // <strong>Wizard News</strong>
          // </div>
          // <div className="sort">
            // Sort By:{" "}
            // <a
              // href="#"
              // className={(this.state.sortOrder === "upvotes" && "sort-selected") ? "woo" : "fud"}
              // onClick={this.setOrder.bind(this, "upvotes")}>
              // Upvotes
            // </a>|
            // <a
              // href="#"
              // className={(this.state.sortOrder === "date" && "sort-selected") ? "woo" : "fud"}
              // onClick={this.setOrder.bind(this, "date")}>
              // Date
            // </a>
          // </div>
        // </div>

export default NotesList;
