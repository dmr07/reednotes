import React, { Component } from "react";
import timeAgo from "node-time-ago";
import orderBy from "lodash/orderBy";
// import w18 from "./w18.png";
import "./PhotoGrid.styl";
// params: props("objs")
class PhotoGrid extends Component {
  state = {
    sortOrder: "date"
  };

  setOrder(order, event) {
    event.preventDefault();
    this.setState({ sortOrder: order });
  }

  render() {
    const photos = orderBy(this.props.objs, this.state.date, "desc");

    return (
      <div className="photogrid">

        {photos &&
          photos.map(item =>
            <div key={item.id} className="news-item">
              <div className="photo-img" style={{background: "url(" + item.url + ")" }}></div>
              <div className="photo-title">{item.title}</div>
              <div className="photo-topic">{item.topics[0]}</div>
              <div className="photo-timestamp">{item.date}</div>
              <div className="photo-body" dangerouslySetInnerHTML={{ __html: item.body }} />
              <div className="photo-divider"></div>
            </div>
          )}
      </div>
    );
  }
}

                // <span className="news-position">{photo.id}. ▲</span> {photo.title}{" "}
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

export default PhotoGrid;
