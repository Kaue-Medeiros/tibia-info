import React from 'react'
import './DisplayInfo.css'

import YasirDisplay from './YasirDisplay'
import EventosDisplay from './EventosDisplay'

export default props => {

    return (
        <div className="display-info">
            <YasirDisplay serverName={props.serverName}/>
            <EventosDisplay serverName={props.serverName}/>
        </div>
    )
}