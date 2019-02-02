import React from 'react';
import axios from 'axios';

class SearchColumn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.artistSearch = this.artistSearch.bind(this);
  }

  handleChange({ target: { name, value }}){
    this.setState({ [name]: value }), this.artistSearch();
  }

  artistSearch(){
    axios
      .get(`https://api.spotify.com/v1/search?q=${this.state.search}&type=artist`, {headers: { 'Authorization': 'Bearer BQCv753gemwRoVTBLgNoW7qjkA3tYdfdo6UeOpHCwoKwHrM9RFY4YRWL7-ODWEYteGXxdT-DShbK9EgXM8sp2uucxjOiLdUPdNiMgNMvRPzO1o0ipVKwMOvfCAm70oLc_xpHBSWUUbLd-lU7k00P1qIEFSlUmgSxX2VOD4DT_9lEKXalqLuULQTF1XFnjdSv76CQ7OZYpYk3TY0zLQCyMcv2qN9jV-AUg8I4hDOOEbL3h3yC1r5_V6he_gop2TBcSkFhAIkeODz08WJc0w'} })
      .then(result => this.setState({ searchResults: result.data }));
    console.log(this.state.searchResults.artist);
  }

  render(){
    return (
      <div className="search-column">
        <div className="search-section">
          <h2>Search</h2>
          <input onChange={this.handleChange} value={this.state.search || ''} type="text" name="search" placeholder="Search for an artist..."  autoComplete="off"/>
        </div>
        <div>
          {!this.state.search
            ?
            <h1><div className="search-prompt">
            ↖︎ Type to begin exploring!
            </div></h1>
            :
            <div>
              {this.state.searchResults.artist && this.state.searchResults.artist.map(
                artist =>
                <p key={artist.mbid}>{artist.name}</p>

              )}
            </div>
          }

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
    );
  }
}

export default SearchColumn;
