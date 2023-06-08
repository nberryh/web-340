'use strict';

const { getTeams, getTeam, displayTeam } = require('./team-manager.js');

//Displaying the array of Team objects
const allTeams = getTeams();
console.log('All Teams:');
allTeams.forEach(team => {
    console.log(displayTeam(team));
    console.log('-----------------------');
});

//Displaying single team objects
const team1 = getTeam('Team 1');
const team2 = getTeam('Team 3');

console.log('Team 1:');
console.log(displayTeam(team1));
console.log('-----------------------');
console.log('Team 3');
console.log(displayTeam(team2));