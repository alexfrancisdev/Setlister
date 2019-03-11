import React from 'react'

import EventBox from './EventBox'
import SetlistBox from './SetlistBox'

class ArtistColumn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <div className="artist-column">
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
            <div>
              {this.props.eventData.results.event.slice(0, 3).map(
                event =>
                  <EventBox key={event.id} event={event}/>
              )
              }
            </div>
          }
        </div>
        <div>
          {!this.props.setlistData
            ?
            <h1>No events</h1>
            :
            <div>
              {this.props.setlistData.setlist.slice(0, 4).map(
                setlist =>
                  <SetlistBox key={setlist.id} setlist={setlist}/>
              )}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ArtistColumn
