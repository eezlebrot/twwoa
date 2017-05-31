import React from 'react';
import ReactDOM from 'react-dom';
import workshops from './data/testData.json';
import events from './data/testData.json';

var monthAbbr = new Array();
monthAbbr[0] = "JAN";
monthAbbr[1] = "FEB";
monthAbbr[2] = "MAR";
monthAbbr[3] = "APR";
monthAbbr[4] = "MAY";
monthAbbr[5] = "JUN";
monthAbbr[6] = "JUL";
monthAbbr[7] = "AUG";
monthAbbr[8] = "SEP";
monthAbbr[9] = "OCT";
monthAbbr[10] = "NOV";
monthAbbr[11] = "DEC";

var dayString = new Array();
dayString[0] = "Sunday";
dayString[1] = "Monday";
dayString[2] = "Tuesday";
dayString[3] = "Wednesday";
dayString[4] = "Thursday";
dayString[5] = "Friday";
dayString[6] = "Saturday";


function formatTime(time) {
  var period = "am";
  if(time.getHours() > 11) {
    period = "pm";
  }
  var hours = time.getHours() % 12;
  var timeString = "" + hours + period;
  return timeString;
}

class ShortFormDate extends React.Component {
  render() {
    var date = new Date(this.props.date);
    var month = monthAbbr[date.getMonth()];
    var day = date.getDate()
    return (
      <div className="date">
        <div>{month}</div>
        <div>{day}</div>
      </div>
    );
  }
}

class ShortFormDetails extends React.Component {
  render() {
    var startDate = new Date(this.props.event.startDate);
    var endDate = new Date(this.props.event.endDate);

    var eventTitle = this.props.event.title;
    if(this.props.event.instructor) {
      eventTitle += " with " + this.props.event.instructor;
    }

    var day = dayString[startDate.getDay()];
    var timeRange = formatTime(startDate) + "-" + formatTime(endDate);
    var desc = day + " " + timeRange + " @ " + this.props.event.location;

    return(
      <div className="event-details">
        <div className="event-title">{eventTitle}</div>
        <div className="event-desc">{desc}</div>
      </div>
    );
  }
}

class ShortFormEvent extends React.Component {
  render() {
    var shortForm = (
      <div className="event">
        <ShortFormDate date={this.props.event.startDate} />
        <ShortFormDetails event={this.props.event} />
      </div>
    );
    return(
      <div>{shortForm}</div>
    );    
  }
}

function sortEvent(a,b) {

  a = new Date(a.startDate);
  b = new Date(b.startDate);

  if(a < b) {
    return -1;
  }
  else if (a > b) {
    return 1;
  }
  else {
    return 0;
  }
};

class EventTable extends React.Component {

  render() {
    var allEvents = [];
    this.props.workshops.workshops.forEach(function(workshop) {
      allEvents.push(workshop);
    });
    this.props.events.events.forEach(function(event) {
      allEvents.push(event);
    });

    allEvents.sort(sortEvent);
    // allEvents.sort(sortEvent);
    var events = [];
    allEvents.forEach(function(event) {
      events.push(<ShortFormEvent event={event} key={event.startDate} />);
    });

    return(<div>{events}</div>);
  }
}

ReactDOM.render(
  <EventTable workshops={workshops} events={events}/>,
  document.getElementById('event-content')
)