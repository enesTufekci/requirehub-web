const ACTION_HANDLERS = {
  //
}

const initialState = {
  user: {}
}

const appReducer = (state = initialState, action) => {
  if (action == null) {
    return state
  }
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default appReducer
