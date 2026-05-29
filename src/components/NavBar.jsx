import React, { Component }  from 'react'
import './NavBar.css'

import NavItem from './NavItem'
import SelectWorld from './SelectWorld'

export default class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <NavItem label="TibiaInfo"/>
                <NavItem label="TibiaInfo"/>
                <SelectWorld world="Honbra"/>
                <NavItem label="TibiaInfo"/>
                <NavItem label="TibiaInfo"/>
            </div>
        )
    }
}