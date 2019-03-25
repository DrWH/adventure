const quit = state => process.exit()

const generateOptions = state => {
  const options = [
    {
      key: 'q',
      desc: 'Quit',
      action: quit
    }
  ]

  // add N E W S if the are valid moves

  return options
}

const moves = [
  {
    key: 'n',
    desc: 'North',
    x:0,
    y:1
  },
  {
    key: 'e',
    desc: 'East',
    x:1,
    y:0
  },
  {
    key: 'w',
    desc: 'west',
    x:-1,
    y:0
  },
  {
    key: 's',
    desc: 'South',
    x:0,
    y:-1
  }
]

const initialState = world => {
  const state = {
    loc: {x:0,y:0},
    world: world
  }
  state.room = world.rooms.find(room => state.loc.x === room.loc.x && state.loc.y === room.loc.y)
  state.options = generateOptions(state)
  return state
}

module.exports = { initialState }
