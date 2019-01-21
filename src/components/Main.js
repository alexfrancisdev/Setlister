import React from 'react';

import SearchColumn from './SearchColumn';

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="main">
        <div className="container">
          <SearchColumn />
          <div className="info-column">
            <h2>About Setlister</h2>
            <p>Setlister is the perfect tool for quicky and conviniently making and saving Spotify playlists
            from your favorite artists performences. Whether you want to relive an incredible
          set, or give yourself a taste of what an act might play, Setlister can do it. </p>
            <p>With Setlisters social features you can save setlists to your profile, follow artists,
          track events and share and vote for the best setlists.</p>
            <div className="news-brief">
              <h2>Latest News</h2>
              <div className="artcle-brief">
                <h3>First Story</h3>

              </div>

            </div>
          </div>
          <div className="setlist-column">

          </div>
          <div className="playlist-column">

          </div>
        </div>
      </div>
    );
  }
}

export default Main;
