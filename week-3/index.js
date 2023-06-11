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
const team1 = getTeam('Alabama');
const team2 = getTeam('Georgia');

console.log('Team 1:');
if (team1) {
    console.log(displayTeam(team1));
} else {
    console.log('Team not found.');
}
console.log('-----------------------');
console.log('Team 3:');
if (team2) {
    console.log(displayTeam(team2));
} else {
    console.log('Team not found.');
}
