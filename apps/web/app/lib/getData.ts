import { Character } from "../types/common";

const getHouses = async () => {
  const result = await fetch("https://anapioficeandfire.com/api/houses");

  if (!result.ok) {
    throw new Error("Failed to fetch houses");
  }

  return result.json();
};

const getSwornMember = async (url: string): Promise<Character> => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Failed to fetch sworn members at: ${url}`);
  }

  return result.json();
};

export { getHouses, getSwornMember };
