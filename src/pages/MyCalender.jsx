import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../MyCalender.css'
import * as events from "events";
class MyCalendar extends Component {

    constructor(props){
        super(props);
    }

    dateClick=(info)=>{
    const clickedDate = info.dateStr;
    const clickedEvent = this.props.events.find(event => event.date === clickedDate);

    if (clickedEvent) {
        alert(`일정 : ${clickedEvent.title}\n${clickedEvent.date}`);
    } else {
        alert(info.dateStr);
    }
}
    render() {
        return (
          <div className="MyCalender">
              <div style={{
                  margin: 20,
                  marginLeft:200,
                  color:"#AFBDD1",
                  fontSize:11,
                  backgroundColor: "#212936",

                    }}>
            <FullCalendar
                 plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={
                        {
                            start: 'prev',
                            center: 'title',
                            end: 'next'
                        }
                    }
                 firstDay={1}
                 height={"80vh"}
                 dateClick = {this.dateClick}
                 events={this.props.events}
                 editable={true}
            />
              </div>
          </div>
        );
    }
}

export default MyCalendar;