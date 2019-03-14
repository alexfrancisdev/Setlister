import React from 'react'
import axios from 'axios'

class SongResult extends React.Component {
  constructor(props){
    super(props)
    this.checkSong = this.checkSong.bind(this)
    this.checkForMatch = this.checkForMatch.bind(this)
  }

  checkSong(){
    console.log('checking song')
    axios
      .get(`https://api.spotify.com/v1/search?query=${this.props.song}&type=track&limit=20`, {headers: { 'Authorization': 'Bearer BQCe0yMZqTkTmpRXgbO4MhmwPG-1fanK1fdwZbMKMveqrRCRk9dO5sOAV_OiyyHJEtbYfRG2OhqX3FjAwUH3ZRTmlGXvm3QLdCUrU7scwD94BAuSp39Ef1WY3xtqaYWqVyBxRy_Kmi-XwSZ4-j-p1CW-LYY6KFYR0h6S'} })
      .then(result => console.log(result))
  }

  checkForMatch(track){

  }

  render(){

    return (
      <p onClick={this.checkSong}>{this.props.song}</p>
    )
  }
}

export default SongResult
