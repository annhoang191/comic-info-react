import React, {Component} from "react";
import './style.css';

class ComicCard extends Component {
  render() {
    const {name, genre, thumbnail, author, review, summary} = this.props;

    return(
      <div className="col-md-4">
        <div className="card-view">
          <div className="thumbnail-image">
            <img src={thumbnail} alt="thumbnail" />
          </div>
          <div className="container">
            <a>
              <div className="tag_name red">{genre}</div>
            </a>
            <div className="comic_info">
              <div className="info">
                <a className="name">{name}</a><br/>
                <span className="author">{author}</span><br/>
              </div>
              <hr />
              <div className="content">
                <a className="review">
                  <p>{review}</p>
                </a>
                <p className="summary">{summary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComicCard;
