const cli = {}
cli.printRoom = room => {
  console.log(room.name)
  console.log("-".repeat(room.name.length))
  console.log(room.desc)
}
module.exports = { cli }
