export default (state = 'all', action) => {
  switch (action.type) {
    case 'CHANGESHOWTYPE':
      return action.payload
    default:
      return state
  }
}

