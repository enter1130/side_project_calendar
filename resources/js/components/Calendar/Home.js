import globalize from 'globalize';
import React, { useCallback } from 'react';
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import useSWR from 'swr';
function Home() {
    const localizer = globalizeLocalizer(globalize) // or globalizeLocalizer
    
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
                showMultiDayTimes
                localizer={localizer}
                startAccessor={(event) => { return new Date(event.start) }}
                endAccessor={(event) => { return new Date(event.end) }}
                events={data.data}
            />
        </div>
    );
}

export default Home;