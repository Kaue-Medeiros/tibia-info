import React from 'react'

export default props => {
    return (
        <div className="display-dominante">
            <h1>Guild Dominante: <br/><span className="server-important-info">{props.dominantGuild}</span></h1>
        </div>
    )
}