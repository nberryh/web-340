'use strict';

const Team = require('./team.js');

const teams = [
    new Team('Alabama', 'Crimson Tide', '54'),
    new Team('LSU', 'Tigers', '54'),
    new Team('Georgia', 'Bulldogs', '54'),
    new Team('Texas', 'Longhorns', '54'),
    new Team('USC', 'Trojans', '54')
];

function getTeams() {
    return teams;
}

function getTeam(name) {
    return teams.find(team => team.name === name);
}

function displayTeam(team) {
    return `Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}`;
}

module.exports = {
    getTeams,
    getTeam,
    displayTeam
};


