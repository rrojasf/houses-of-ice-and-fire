import React from 'react'
import CharacterList from './CharacterList'

const House = ({ house }) => {
  return (
    <div>
      <h2>House</h2>
      {house.swornMembers.length > 0 ? (<CharacterList characters={house.swornMembers} />) : (<p>This house has no sworn members.</p>)}
    </div>
    
  )
}

export default House