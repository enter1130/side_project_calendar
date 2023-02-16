import moment from 'moment';
import React, { useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import useSWR from 'swr';
function Home() {
    const localizer = momentLocalizer(moment) // or globalizeLocalizer
    
    const fetcher = url => fetch(url).then(res => res.json());
    const link='api/memo';
    const {data} = useSWR(link, fetcher,{refreshInterval: 500});

    const eventPropGetter = useCallback(
        (event, start, end, isSelected) => ({
          ...(event.color && {
            style:{backgroundColor:event.color,color:event.text}
          }),
        }),
        []
    )

    if(!data) return (<></>)
    return (
        <div style={{height:'800px'}}>
            <Calendar
                eventPropGetter={eventPropGetter}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={data.data}
            />
        </div>
    );
}

export default Home;