import React from 'react'

class EventBox extends React.Component{
  constructor(props){
    super(props)
    this.dateFormatter = this.dateFormatter.bind(this)
    this.tidyName = this.tidyName.bind(this)
  }

  dateFormatter(date){
    date = date.split('-').reverse()
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

  render(){
    return(
      <a href={this.props.event.uri} target="_blank" rel="noopener noreferrer">
        <div className="event-box">
          <div className="date-box">
            <div className="date-container">
              <span className="day">{this.dateFormatter(this.props.event.start.date)[0]}</span>
              <div>
                <span className="month">{this.dateFormatter(this.props.event.start.date)[1]}</span>
                <span> </span>
                <span className="year">{this.dateFormatter(this.props.event.start.date)[2]}</span>
              </div>
            </div>
          </div>
          <h3>{this.props.event.displayName.replace(/ *\([^)]*\) */g, '').substr(0,60-1)+(this.props.event.displayName.replace(/ *\([^)]*\) */g, '').length>60?'...':'')}</h3>
        </div>
      </a>
    )
  }
}

export default EventBox
