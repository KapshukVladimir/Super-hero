export interface BattleResult {
  heroName: string;
  opponentName: string;
  battleTime: object;
  battleResult: string;
  heroId: string;
  opponentId: string;
}
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
export interface Hero {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    durability: string;
    power: string;
    speed: string;
    combat: string;
  };
  biography: object;
  appearance: object;
  work: object;
  connections: object;
  image: {
    url: string;
  };
  isSelected?: boolean;
}

export interface PowerUps {
  name: string;
  type: string;
  amount: number;
  count: number;
  isSelected?: boolean;
  imgUrl: string;
}

export interface ResponseArray {
  response: string;
  ['results-for']: string;
  results: Hero[];
}

export interface ResultStatsSum {
  heroStatsSum: number;
  opponentStatsSum: number;
}
