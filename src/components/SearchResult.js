import React from 'react'

class SearchResult extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    const artist = this.props.artist.name
    this.props.selectArtist(artist)
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        {this.props.artist.images.length
          ?
          <div className="artist-result">
            <img className="artist-photo" src= {this.props.artist.images[0].url}/>
            <div>
              <h3>{this.props.artist.name}</h3>
            </div>
          </div>
          :
          <span></span>
        }
      </div>
    )
  }
}

export default SearchResult
