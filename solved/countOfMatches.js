const numberOfMatches = function(n) {
    let teams = n;
    let matches = 0;
    //  as long as there are at least two teams remaining
    while (teams >=2) {
        //  if n is even
        if (teams % 2 === 0) {
            //  add n/2 matches
            matches += teams/2;
            //  divide the number of teams by 2
            teams = teams/2;
        }
        //  if there are an odd number of teams
        if (teams % 2 ===1) {
            matches += (teams-1)/2;
            teams = ((teams-1) / 2) + 1;
            console.log(teams, matches)
        }
    }
    return matches;
};

console.log((numberOfMatches(7)))