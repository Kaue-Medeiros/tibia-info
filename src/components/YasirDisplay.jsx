import React, { Component } from 'react'

export default class YasirDisplay extends Component {
    render() {
        return (
            <div>
                <h1>Yasir em <br/><span className="server-important-info">{this.props.serverName}</span></h1>
                <h1>ON/OFF</h1>
            </div>
        )
    }
}