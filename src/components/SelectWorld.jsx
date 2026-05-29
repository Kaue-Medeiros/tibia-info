import React from 'react';
import './SelectWorld.css'

export default props => (

    <div>
        <select
            className="select-world"
            value={props.value || "world-honbra"}
            onChange={props.onChange} /* Leva a responsabilidade do onChange para o componente pai (navBar) */
        >
            <option value="world-quelibra">Quelibra</option>
            <option value="world-honbra">Honbra</option>
            <option value="world-tornabra">Tornabra</option>
            <option value="world-venebra">Venebra</option>
        </select>
    </div>
)