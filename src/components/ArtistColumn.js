import React from 'react'

import EventBox from './EventBox'

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
            <div>
              {this.props.eventData.results.event.map(
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
            <h1>{this.props.setlistData.total} setlists avalible</h1>
          }
        </div>
      </div>
    )
  }
}

export default ArtistColumn
