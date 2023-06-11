/*
===========================================
; Title:  team-manager.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: JavaScript for team-manager.js
;==========================================
*/

//Make the code have strict
'use strict';

//Imports team from team.js
const Team = require('./team.js');

//Provides value to variables 
const teams = [
    new Team('Alabama', 'Crimson Tide', '54'),
    new Team('LSU', 'Tigers', '54'),
    new Team('Georgia', 'Bulldogs', '54'),
    new Team('Texas', 'Longhorns', '54'),
    new Team('USC', 'Trojans', '54')
];

//Function for getTeams
function getTeams() {
    return teams;
}

//Function for getTeam
function getTeam(name) {
    return teams.find(team => team.name === name);
}

//Function for displayTeam
function displayTeam(team) {
    return `Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}`;
}

//Export modules
module.exports = {
    getTeams,
    getTeam,
    displayTeam
};


