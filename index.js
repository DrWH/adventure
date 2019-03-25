const world = require("./worlds/test")
const game = require('./game')
const print = require("./print").cli

const state = game.initialState(world)

print.printState(state)
//console.log(game.initialState(world)
