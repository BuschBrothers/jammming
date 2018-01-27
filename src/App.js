import React, { Component } from 'react';
import './App.css';

import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { searchResults: [
                                  {name: 'nombre',
                                  artist: 'artista',
                                  album: 'album'
                                  }
                                  ]
                  };
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
