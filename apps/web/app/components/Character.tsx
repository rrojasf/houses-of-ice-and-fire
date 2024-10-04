import React from 'react'

const Character = ({ character }) => {
  return (
    <div>
      <h4>Character</h4>
      <div>
        <p>{character.name}</p>
          <p>
            Status: {character.died ? 'Dead' : 'Alive'}
          </p>
          {character.died && (
            <p>Died: {character.died}</p>
          )}
      </div>
    </div>
  )
}

export default Character