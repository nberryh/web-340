/*
===========================================
; Title:  team.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: JavaScript for team.js
;==========================================
*/

//Make the code have strict
'use strict';

//Provides value to variables with function
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

//Export modules
module.exports = Team;