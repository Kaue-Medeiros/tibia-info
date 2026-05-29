import React, { Component } from 'react'
import './NavItem.css'

export default props => (
    <div className="nav-item">
        {props.label}
    </div>
)