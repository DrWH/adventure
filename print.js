const cli = {}
cli.printRoom = room => {
  console.log(room.name)
  console.log("-".repeat(room.name.length))
  console.log(room.desc)
}
cli.printOptions = options => {
  console.log(options)
}
cli.printState = state => {
  cli.printRoom(state.room)
  cli.printOptions(state.options)
}

module.exports = { cli }
