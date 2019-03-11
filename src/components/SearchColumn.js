import React from 'react'
import axios from 'axios'
import SearchResult from './SearchResult'

class SearchColumn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchResults: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.artistSearch = this.artistSearch.bind(this)
  }

  handleChange({ target: { name, value }}){
    this.setState({ [name]: value },() => this.artistSearch())
  }

  artistSearch(){
    if (this.state.search.length > 0){
      axios
        .get(`https://api.spotify.com/v1/search?query=${this.state.search}&type=artist&limit=6`, {headers: { 'Authorization': 'Bearer BQDyKzfa_1XFKNgTmX-_jbeZ1CKXai9nBroHXPqHQxWn06qFA-NVmG6cws8IsV-IQAsGQ8LMJ578hFFYl8FEq6cH8dOb0JVWkT0TU2TSibLzBNCmlH1OTEDWOh30lF4ID3yy6RxlUbTCe4TXmBmd3W6bzvTN_lCzs0yD'} })
        .then(result => this.setState({ searchResults: result.data }))
    }
  }

  render(){
    return (
      <div className="search-column">
        <div className="search-section">
          <h2 onClick={this.selectArtist}>Search</h2>
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
              {this.state.searchResults.artists && this.state.searchResults.artists.items.map(
                artist =>
                  <SearchResult selectArtist={this.props.selectArtist} key={artist.id} artist={artist}/>
              )}
            </div>
          }

        </div>

      </div>
    )
  }
}

export default SearchColumn
