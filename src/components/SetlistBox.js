import React from 'react'

class SetlistBox extends React.Component{
  constructor(props){
    super(props)
    this.dateFormatter = this.dateFormatter.bind(this)
    this.tidyName = this.tidyName.bind(this)
    this.calculateSongNum = this.calculateSongNum.bind(this)
  }

  dateFormatter(date){
    date = date.split('-')
    let month = date[1]
    switch(month){
      case '01':
        month = 'JAN'
        break
      case '02':
        month = 'FEB'
        break
      case '03':
        month = 'MAR'
        break
      case '04':
        month = 'APR'
        break
      case '05':
        month = 'MAY'
        break
      case '06':
        month = 'JUN'
        break
      case '07':
        month = 'JUL'
        break
      case '08':
        month = 'AUG'
        break
      case '09':
        month = 'SEP'
        break
      case '10':
        month = 'OCT'
        break
      case '11':
        month = 'NOV'
        break
      case '12':
        month = 'DEC'
        break
    }
    date[1] = month
    return date
  }

  tidyName(name){
    return name.replace(/ *\([^)]*\) */g, '')
  }

  calculateSongNum(sets){
    console.log('sets is ', sets)
    let songNum = 0
    sets.set.forEach((set) =>
      songNum = songNum + set.song.length
    )
    return songNum
  }

  render(){
    return(
      <div className="event-box">
        <div className="date-box">
          <div className="date-container">
            <span className="day">{this.dateFormatter(this.props.setlist.eventDate)[0]}</span>
            <div>
              <span className="month">{this.dateFormatter(this.props.setlist.eventDate)[1]}</span>
              <span> </span>
              <span className="year">{this.dateFormatter(this.props.setlist.eventDate)[2]}</span>
            </div>
          </div>
        </div>
        <div>
          <span>{this.props.setlist.venue.name.replace(/ *\([^)]*\) */g, '').substr(0,60-1)+(this.props.setlist.venue.name.replace(/ *\([^)]*\) */g, '').length>60?'...':'')}</span>
          <span> - {this.props.setlist.venue.city.name}, {this.props.setlist.venue.city.country.code}</span>
          {!this.props.setlist.sets.set.length > 0
            ?
            <h3>0 songs</h3>
            :
            <h3>{this.calculateSongNum(this.props.setlist.sets)} songs</h3>
          }
        </div>
      </div>
    )
  }
}

export default SetlistBox
