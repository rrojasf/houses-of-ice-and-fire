const getHouses = async () => {
  const result = await fetch('https://anapioficeandfire.com/api/houses')
  return result.json()
}

const getSwornMember = async (url: string) => {
  const result = await fetch(url)
  return result.json()
}

export {
  getHouses,
  getSwornMember
}