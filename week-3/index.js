/*
===========================================
; Title:  index.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: JavaScript for index.js
;==========================================
*/

//Make the code have strict
'use strict';

//Imports code from team-manager
const { getTeams, getTeam, displayTeam } = require('./team-manager.js');

//Displaying the array of Team objects
const allTeams = getTeams();
console.log('-- DISPLAYING TEAMS: --');
allTeams.forEach(team => {
    console.log(displayTeam(team));
    console.log();
});


//Displaying single team objects
const team1 = getTeam('Alabama');
const team2 = getTeam('Georgia');

//Function for team1 and team2 to be execute 
console.log('-- DISPLAYING A SINGLE TEAM: --');
if (team1) {
    console.log(displayTeam(team1));
} else {
    console.log('Team not found.');
}
console.log();

console.log('-- DISPLAYING A SINGLE TEAM: --');
if (team2) {
    console.log(displayTeam(team2));
} else {
    console.log('Team not found.');
}
console.log();