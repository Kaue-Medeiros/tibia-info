import React from 'react'
import './NavBar.css'

import NavItem from './NavItem'
import SelectWorld from './SelectWorld'

export default props => (
    <div className='navbar'>
        <SelectWorld
            value={props.selectedWorld}
            onChange={props.onWorldChange} /* Leva a responsabilidade do onChange para o componente pai (App) */
        />
    </div>
)