// TODO的redicer
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'ACTIVECHANGE':
      return action.payload(state)
    default:
      return state
  }
}


