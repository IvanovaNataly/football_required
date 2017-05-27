// prints
// Games:
// Barca - Real Madrid: 4 - 0
// Real Madrid - Atletico: 2 - 0
// Barca - Atletico: 1 - 3
// Team Stats:
// Barca: 5 (2.5 per game)
// Real Madrid: 2 (1 per game)
// Atletico: 3 (1.5 per game)



class League {
    constructor() {
        this.gameStat = [];
        this.teams = {};
    }

    play(game) {
        this.gameStat.push(game);
        this.manageTeams(game);
    }

    manageTeams(game) {
        for (let everyTeam in game) {
            let teamName = game[everyTeam].name;
            if (this.teams.hasOwnProperty(teamName)) {
                this.teams[teamName].numbOfGames++;
                this.teams[teamName].numbOfGoals += game[everyTeam].goals;
            } else {
                this.teams[teamName] = {numbOfGames: 1, numbOfGoals: game[everyTeam].goals};
            }
        }     
    }

    getLeageStatistics() {
        let leageStat = "";
        for (let team in this.teams) {
            leageStat += team + ": " + this.getTeamStatistics(this.teams[team]);
        }
        return (leageStat);
    }

    getTeamStatistics(team) {
        return (team.numbOfGoals + " (" + team.numbOfGoals/team.numbOfGames + " per game) \n");
    }

    toString() {
        let games = "Games: \n" + this.gameStat.map(game => game.result + " \n").join("");
        let gameStat = "Team Stats: \n" + this.getLeageStatistics();
        let output = games + " \n" + gameStat;
        return output;
    }
}

module.exports = League;