const ACTION_HANDLERS = {
  //
}

const initialState = {
  cases: [],
}

const appReducer = (state = initialState, action ) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}


export default appReducer;
