import React, {Component} from "react";
import './style.css';

class ComicCard extends Component {
  render() {
    const {
      name,
      cover_date,
      thumbnail,
      summary,
      site_detail_url
    } = this.props;
    return(
      <div className="col-md-3">
        <div className="card-view">
          <div className="thumbnail-image">
            <img src={thumbnail} alt="thumbnail" />
          </div>
          <div className="container">
            <div className="tag_name red">{cover_date}</div>
            <div className="comic_info">
              <div className="info">
                <a className="name" href={site_detail_url}>{name}</a><br/>
              </div>
              <hr />
              <div className="content">
                <p className="summary" dangerouslySetInnerHTML={{__html: summary}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComicCard;
