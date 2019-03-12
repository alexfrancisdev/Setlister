import React from 'react'

class SongResult extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    return (
      <p>{this.props.song}</p>
    )
  }
}

export default SongResult
