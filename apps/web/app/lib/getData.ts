import { Character, House } from "../types/common";

const getHouses = async () => {
  const result = await fetch("https://anapioficeandfire.com/api/houses");

  if (!result.ok) {
    throw new Error("Failed to fetch houses");
  }

  return result.json();
};

async function getHouse(id: string): Promise<House> {
  const res = await fetch(`https://anapioficeandfire.com/api/houses/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch house");
  }
  return res.json();
}

const getSwornMember = async (url: string): Promise<Character> => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Failed to fetch sworn members at: ${url}`);
  }

  return result.json();
};

export { getHouses, getHouse, getSwornMember };
