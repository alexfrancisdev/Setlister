import React from 'react'

import SongResult from './SongResult'

class SetlistColumn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.setsToSingleArray = this.setsToSingleArray.bind(this)
  }

  setsToSingleArray(){
    const songlist = []
    this.props.setlist.sets.set.forEach(function(set){
      set.song.forEach(function(song){
        songlist.push(song.name)
      })
    })
    return songlist
  }

  render(){
    return (
      <div>
        <h1>{this.props.setlist.venue.name}</h1>
        <div>
          {this.setsToSingleArray().map(
            song =>
              <p key={song}>{song}</p>
          )}
        </div>
      </div>
    )
  }
}

export default SetlistColumn
