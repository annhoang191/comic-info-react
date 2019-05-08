import React, { Component } from 'react';
import './style.css';

import NavBar from '../NavBar/NavBar';
import ComicCard from '../ComicCard/ComicCard';

const comics = [
  {
    objectID: 0,
    name: 'Saga',
    genre: 'Epic space opera/fantasy',
    thumbnail: 'https://cdn.imagecomics.com/assets/i/releases/2453/saga-44_13c8c1c991.jpg',
    author: 'Brian K. Vaughan, Fiona Staples',
    review: 'This is an original fantasy book with no superheroes, two non-white leads and an opening chapter featuring graphic robot sex. I thought we might be cancelled by our third issue.',
    summary: 'Saga is an ongoing series and space opera from Brian K. Vaughan and Fiona Staples described as Romeo and Juliet meets Star Wars meets Game of Thrones...'
  },
  {
    objectID: 1,
    name: 'Paper Girls',
    genre: 'Mystery',
    thumbnail: 'https://66.media.tumblr.com/a4190c6a885047919592d2fd9704a238/tumblr_inline_nw6nz1kgC31tceg4s_500.jpg',
    author: 'Brian K. Vaughan, Cliff Chiang',
    review: 'THE PERFECT COMIC FOR YOUR \'80S NOSTALGIA TRIP',
    summary: 'an ongoing sci-fi adventure series following four newspaper delivery girls as they wind up in the middle of a time travel mystery'
  },
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: comics
    }

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value});
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

        <div className="list-comics row container">
          {comics.map(comic =>
            <ComicCard key={comic.objectID}
              name={comic.name}
              thumbnail={comic.thumbnail}
              genre={comic.genre}
              author={comic.author}
              review={comic.review}
              summary={comic.summary}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
