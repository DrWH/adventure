const world = require("./worlds/test")
console.log(world)
const print = require("./print").cli
print.printRoom(world.rooms[0])
