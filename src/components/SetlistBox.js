import React from 'react'

class SetlistBox extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h3>{this.props.setlist.venue.name}</h3>
        <h3>{this.props.setlist.eventDate}</h3>
      </div>
    )
  }
}

export default SetlistBox
