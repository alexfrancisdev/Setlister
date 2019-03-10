import React from 'react'

class ArtistColumn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <div>
        <div>
          {!this.props.selectedArtistData
            ?
            <h1>Sorry, we do not have data for this artist yet</h1>
            :
            <h1>{this.props.selectedArtistData}</h1>
          }
        </div>
        <div>
          {!this.props.eventData
            ?
            <h1>No events</h1>
            :
            <h1>{this.eventData.totalEntries.length} events on Songkick</h1>
          }
        </div>
      </div>
    )
  }
}

export default ArtistColumn
