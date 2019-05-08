import React, {Component} from "react";
import './style.css';

class ComicCard extends Component {
  render() {
    return(
      <div className="card-view">
        <div className="thumbnail-image">
          <img src="https://cdn.imagecomics.com/assets/i/releases/2453/saga-44_13c8c1c991.jpg" alt="company" />
        </div>
        <div className="container">
          <a>
            <div className="tag_name red">Epic space opera/fantasy</div>
          </a>
          <div className="comic_info">
            <div className="info">
              <a className="name">Saga</a><br/>
              <span className="author">2012</span><br/>
            </div>
            <div className="content">
              <a className="title">
                <p>This is an original fantasy book with no superheroes, two non-white leads and an opening chapter featuring graphic robot sex. I thought we might be cancelled by our third issue."</p>
              </a>
              <p className="review">Saga is an ongoing series and space opera from Brian K. Vaughan and Fiona Staples described as Romeo and Juliet meets Star Wars meets Game of Thrones....</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComicCard;
