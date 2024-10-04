import React from 'react'
import Character from './Character'

const CharacterList = ({ characters }) => {
  return (
    <div>
      <h3>Characters</h3>
      {characters.map(character => <Character character={character} />)}      
    </div>
  )
}

export default CharacterList