import React, { useState, setState } from 'react'

import NavBar from './components/NavBar'
import DisplayInfo from './components/DisplayInfo'


// Função para buscar as informações do servidor selecionado no backend
async function FetchFromServer(selectedWorld) {
  try {
    const res = await fetch('http://localhost:3001/api');
    const data = await res.json()
    return data[selectedWorld]
  }
  catch (error) {
    console.log(`Error fetching server info: ${error}`);
    return null;
  }
}

function App() {
  // Cria os estados para armazenar o servidor selecionado, o nome do servidor e a guilda dominante
  const [selectedWorld, setSelectedWorld] = useState('world-honbra');
  const [serverName, setServerName] = useState('Honbra');
  const [dominantGuild, setDominantGuild] = useState('Acesso Negado')

  // Pega as informações do servidor selecionado e atualiza os estados serverName e dominantGuild
  FetchFromServer(selectedWorld).then(data => {
    setServerName(data.serverName)
    setDominantGuild(data.dominantGuild)
  })


  return (
    <>
      <NavBar
        selectedWorld={selectedWorld}
        onWorldChange={e => {
          setSelectedWorld(e.target.value)
        }}
      />
      <DisplayInfo serverName={serverName} dominantGuild={dominantGuild}/>
    </>
  );
}

export default App;