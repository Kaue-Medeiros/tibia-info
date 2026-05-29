import React, { useState } from 'react'

import NavBar from './components/NavBar'
import DisplayInfo from './components/DisplayInfo'

const SERVER_NAMES = {
    'world-quelibra': 'Quelibra',
    'world-honbra': 'Honbra',
    'world-tornabra': 'Tornabra'
}

export default () => {
    const [selectedWorld, setSelectedWorld] = useState('world-honbra');
    {/* Cria um estado para armazenar o mundo selecionado, e sua função Set */}

    return (
        <>
          <NavBar
            selectedWorld={selectedWorld}
            onWorldChange={event => setSelectedWorld(event.target.value)}
          />
          <DisplayInfo serverName={SERVER_NAMES[selectedWorld] || 'Honbra'} />
        </>
      );
}