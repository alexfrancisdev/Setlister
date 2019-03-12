import React from 'react'
import axios from 'axios'

import SearchColumn from './SearchColumn'
import NewsColumn from './NewsColumn'
import ArtistColumn from './ArtistColumn'
import SetlistColumn from './SetlistColumn'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.selectArtist = this.selectArtist.bind(this)
    this.getArtistInfo = this.getArtistInfo.bind(this)
    this.getSetlistData = this.getSetlistData.bind(this)
    this.getEventData = this.getEventData.bind(this)
    this.selectSetlist = this.selectSetlist.bind(this)
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
    axios.get(`https://api.songkick.com/api/3.0/artists/mbid:${this.state.selectedArtistData.mbid}/calendar.json?apikey=A7oaG4mya2JfrR6V`)
      .then(result => this.setState({ eventData: result.data.resultsPage })).then(() => console.log(this.state))
  }

  selectSetlist(props){
    this.setState({ selectedSetlist: props })
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
            <ArtistColumn  selectSetlist={this.selectSetlist} selectedArtistData={this.state.selectedArtist} setlistData={this.state.setlistData} eventData={this.state.eventData}/>
          }
          {!this.state.selectedSetlist
            ?
            <span></span>
            :
            <SetlistColumn setlist={this.state.selectedSetlist}/>
          }
        </div>
      </div>
    )
  }
}

export default Main
