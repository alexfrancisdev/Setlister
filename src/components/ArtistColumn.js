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
          <h2>Upcoming Events</h2>
          {!this.props.eventData
            ?
            <h1>No events</h1>
            :
            <div>
              {!this.props.eventData.totalEntries
                ?
                <p>There are no upcoming events</p>
                :
                <div>
                  {this.props.eventData.results.event.slice(0, 3).map(
                    event =>
                      <EventBox key={event.id} event={event}/>
                  )
                  }
                  <p>{this.props.eventData.totalEntries} events on Songkick</p>

                </div>

              }
            </div>
          }
        </div>
        <div>
          <h2>Setlists</h2>
          {!this.props.setlistData
            ?
            <h1>No events</h1>
            :
            <div>
              {this.props.setlistData.setlist.map(
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
