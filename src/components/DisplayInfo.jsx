import React from 'react'
import './DisplayInfo.css'

import YasirDisplay from './YasirDisplay'
import EventosDisplay from './EventosDisplay'
import DisplayDominante from './DisplayDominante'

export default props => {

    return (
        <div className="display-info">
            <YasirDisplay serverName={props.serverName}/>
            <DisplayDominante dominantGuild={props.dominantGuild}/>
            <EventosDisplay serverName={props.serverName} />
        </div>
    )
}