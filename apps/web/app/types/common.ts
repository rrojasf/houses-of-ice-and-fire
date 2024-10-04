export interface Character {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string | null;
  titles: string[];
  aliases: string[];
  father: string | null;
  mother: string | null;
  spouse: string | null;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}

export interface House {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: string[];
  cadetBranches: string[];
  swornMembers: Character[];
}