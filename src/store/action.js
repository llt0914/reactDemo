const addTodo = (payload) => {
  return {
    type: 'ADD',
    payload,
    meta: {}
  }
}

const activeChange = payload => {
  return {
    type: 'ACTIVECHANGE',
    payload
  }
}

const changeShowType = payload => {
  return {
    type: 'CHANGESHOWTYPE',
    payload
  }
}

export {
  addTodo, activeChange, changeShowType
}