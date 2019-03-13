import React from 'react'
import axios from 'axios'

class SongResult extends React.Component {
  constructor(props){
    super(props)
    this.checkSong = this.checkSong.bind(this)
  }

  checkSong(){
    console.log('checking song')
    axios
      .get(`https://api.spotify.com/v1/search?query=${this.props.song}&type=track&limit=20`, {headers: { 'Authorization': 'Bearer BQCj21_ongl7Uw_SYHXNRk0mfhv6s46QyzWXXU1rdyKTgE2wZonladKtftNJvkqxdCUewW7w2qTcCzaY6ON0pJmOfGMecok6XsLVLjFTjkycmaDYx_vPyqDBcFmFSNstWHK3vjd3i-aALkHctVpUFeQrfdCl5lLUx8gU'} })
      .then(result => console.log(result))
  }

  // componentDidMount(){
  //   this.checkSong()
  // }

  render(){

    return (
      <p onClick={this.checkSong}>{this.props.song}</p>
    )
  }
}

export default SongResult
