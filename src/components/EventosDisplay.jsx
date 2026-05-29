import React, { Component, useEffect } from 'react'

export default class EventosDisplay extends Component {
    render() {
        return (
            <div>
                <h1>Eventos em <br/><span className="server-important-info">{this.props.serverName}</span></h1>
                <ul>
                    <li>Evento 1</li>
                    <li>Evento 2</li>
                    <li>Evento 3</li>
                    <li>Evento 4</li>
                    <li>Evento 5</li>
                </ul>
            </div>
        )
    }
}