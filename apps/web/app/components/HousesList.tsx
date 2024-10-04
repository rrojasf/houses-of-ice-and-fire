import React from 'react'
import House from './House'

const HousesList = ({ houses }) => {
  return (
    <div>
      {houses.map((house) => <House key={house.url} house={house} />)}
    </div>
  )
}

export default HousesList