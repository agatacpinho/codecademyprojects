let team = {
  _players: [
  {firstName: 'Rui',
  lastName: 'Patrício',
  age: 34},
  {firstName: 'João',
  lastName: 'Moutinho',
  age: 35},
  {firstName: 'Luís',
  lastName: 'Figo',
  age: 49}
  ],
  _games: [
  {opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27},
  {opponent: 'Manchester United',
  teamPoints: 53,
  opponentPoints: 10}, 
  {opponent: 'Sporting',
  teamPoints: 70,
  opponentPoints: 23}
  ],
  
  get players(){
    return this._players;
  },
  
  get games(){
    return this._games;
  },
  
  addPlayer(firstName, lastName, age){
    const newPlayer = {firstName: firstName,
                      lastName: lastName, 
                       age: age};
    this._players.push(newPlayer);
  },
  
  addGame(opponent, teamPoints, opponentPoints){
    const newGame = {opponent: opponent,
                    teamPoints: teamPoints,
                    opponentPoints: opponentPoints};
    this._games.push(newGame);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);


team.addGame('Benfica', 23, 32);
team.addGame('Real Madrid', 45, 10);
team.addGame('Wolf', 11, 82);
console.log(team._games);
