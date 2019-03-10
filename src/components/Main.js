import React from 'react'
import axios from 'axios'

import SearchColumn from './SearchColumn'
import NewsColumn from './NewsColumn'
import ArtistColumn from './ArtistColumn'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.selectArtist = this.selectArtist.bind(this)
    this.getArtistInfo = this.getArtistInfo.bind(this)
    this.getSetlistData = this.getSetlistData.bind(this)
    this.getEventData = this.getEventData.bind(this)
  }

  selectArtist(artist){
    this.setState({ selectedArtist: artist}, () => this.getArtistInfo())
  }

  getArtistInfo(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/search/artists?artistName=${this.state.selectedArtist}&p=1&sort=relevance`, {headers: { 'x-api-key': '68348d78-06ec-476b-a0a6-5244db9e560e'} })
      .then(result => this.setState({ selectedArtistData: result.data.artist[0] })).then(() => this.getSetlistData())
  }

  getSetlistData(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/artist/${this.state.selectedArtistData.mbid}/setlists`, {headers: { 'x-api-key': '68348d78-06ec-476b-a0a6-5244db9e560e'} })
      .then(result => this.setState({ setlistData: result.data })).then(() => this.getEventData())
  }

  getEventData(){
    console.log('state is', this.state)
    axios.get(`https://api.songkick.com/api/3.0/artists/mbid:${this.state.selectedArtistData.mbid}/calendar.json?apikey=A7oaG4mya2JfrR6V`)
      .then(result => this.setState({ eventData: result.data.resultsPage })).then(() => console.log(this.state))
  }


  render(){

    return (
      <div className="main">
        <div className="container">
          <SearchColumn selectArtist={this.selectArtist}/>
          {!this.state.selectedArtistData
            ?
            <NewsColumn />
            :
            <ArtistColumn selectedArtistData={this.state.selectedArtistData}/>
          }

          <div className="setlist-column">

          </div>
          <div className="playlist-column">

          </div>
        </div>
      </div>
    )
  }
}

export default Main
