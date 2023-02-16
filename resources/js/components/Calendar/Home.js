import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import useSWR from 'swr';
function Home() {
    const localizer = momentLocalizer(moment) // or globalizeLocalizer
    var [EventsList,setEventsList]=useState([])
    
    const fetcher = url => fetch(url).then(res => res.json());
    const link='api/memo';
    const {data} = useSWR(link, fetcher,{refreshInterval: 500});

    if(!data) return (<></>)
    return (
        <div style={{height:'800px'}}>
            <Calendar 
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={data.data}
            />
        </div>
    );
}

export default Home;