const world = require("./worlds/test")
const game = require('./game')
const print = require("./print").cli

console.log(game.initialState(world))
