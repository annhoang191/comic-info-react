import React, { Component } from 'react';
import axios from 'axios';

import './style.css';

import NavBar from '../NavBar/NavBar';
import ComicCard from '../ComicCard/ComicCard';

import {
  PATH_BASE,
  PATH_CORS,
  API_KEY
} from '../../constants/index';

let url = `${PATH_CORS}${PATH_BASE}?api_key=${API_KEY}&format=json&filter=name:Saga&sort=cover_date:desc`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: []
    }
  }


  fetchComics(){
    axios
    .get(url)
    .then(response => this.setState({comics: response.data.results}))
    .catch(errors => console.log(errors));
  }

  componentDidMount() {
    this.fetchComics();
  }

  render() {
    const {comics} = this.state;

    return (
      <div className="App">
        <NavBar app_title="Comic Info" />
        <div className="row justify-content-center">
          <div className="col-12 ">
            <h2 className="site-section-heading text-center">Comic</h2>
          </div>
        </div>

        <div className="list-comics row">
          {comics.map(comic =>
            <ComicCard key={comic.id}
              name={comic.name}
              thumbnail={comic.image.thumb_url}
              cover_date={comic.cover_date}
              site_detail_url={comic.site_detail_url}
              summary={comic.description}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
