import React from 'react';

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="main">
        <div className="container">
          <div className="search-column">
            <div className="search-section">
              <h2>Search</h2>
              <input type="text" name="" placeholder="Search for an artist..."/>
            </div>
            <div className="search-prompt">
              ↖︎ Type to begin exploring!
            </div>
            <div className="search-results">
              <div className="artist-result">
                <img className="artist-photo" src="https://img.apmcdn.org/fe09fe0995b6bd1c925c24a6f95ba700e4d8e11e/uncropped/189a01-20130114-radiohead.jpg" alt="bandname"/>
                <div>
                  <h3>Radiohead</h3>
                  <span>468 Setlists</span><span>No upcoming events</span>
                </div>
              </div>
              <div className="artist-result">
                <img className="artist-photo" src="https://i1.wp.com/faroutmagazine.co.uk/wp-content/uploads/2016/02/Mac-DeMarco-provides-update-on-new-album-.jpg?resize=759%2C500&ssl=1" alt="bandname"/>
                <div>
                  <h3>Mac DeMarco</h3>
                  <span>515 Setlists</span><span>4 upcoming events</span>
                </div>
              </div>
              <div className="artist-result">
                <img className="artist-photo" src="https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/GettyImages-518444366_kghs81/pusha-t-album-may.jpg" alt="bandname"/>
                <div>
                  <h3>Pusha T</h3>
                  <span>103 Setlists</span><span>8 upcoming events</span>
                </div>
              </div>
              <div className="artist-result">
                <img className="artist-photo" src="https://res.cloudinary.com/jpress/image/fetch/ar_3:2,c_fill,f_auto,h_413,w_620/http://www.wow247.co.uk/wp-content/uploads/2016/05/stoneroses-620x413.jpg" alt="bandname"/>
                <div>
                  <h3>The Stone Roses</h3>
                  <span>253 Setlists</span><span>No upcoming events</span>
                </div>
              </div>
              <div className="artist-result">
                <img className="artist-photo" src="https://www.billboard.com/files/styles/article_main_image/public/media/Adele-2015-press-Alasdair-McLellan-XL-billboard-650-2.jpg" alt="bandname"/>
                <div>
                  <h3>Adele</h3>
                  <span>288 Setlists</span><span>No upcoming events</span>
                </div>
              </div>
              <div className="artist-result">
                <img className="artist-photo" src="https://consequenceofsound.files.wordpress.com/2015/07/beach-house-sparks-new-listen.jpg?quality=80&w=807" alt="bandname"/>
                <div>
                  <h3>Beach House</h3>
                  <span>288 Setlists</span><span>No upcoming events</span>
                </div>
              </div>
            </div>
          </div>
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
