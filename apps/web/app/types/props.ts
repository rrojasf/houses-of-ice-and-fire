import { Character, HouseWithMembers } from "./common";

export interface HouseListProps {
  houses: HouseWithMembers[];
}

export interface HouseProps {
  house: HouseWithMembers;
}

export interface CharacterListProps {
  characters: Character[];
}

export interface CharacterProps {
  character: Character;
}
