import React from 'react'

class EventBox extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>{this.props.event.displayName}</h1>
      </div>
    )
  }
}

export default EventBox
