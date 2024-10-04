import React from 'react'
import Character from './Character'
import { CharacterListProps } from '../types/props'
import { Typography, List } from '@mui/material'

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Sworn Members
      </Typography>
      <List>
        {characters.map((character) => (
          <Character key={character.url} character={character} />
        ))}
      </List>
    </>
  )
}

export default CharacterList