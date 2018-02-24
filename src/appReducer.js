import {
  CREATE_REQUIREMENT 
} from './actionTypes';

export const createRequirement = (requirement) => ({
  type: CREATE_REQUIREMENT,
  payload: requirement,
});

const ACTION_HANDLERS = {
  ['CREATE_REQUIREMENT']: (state, action) => 
    ({...state, requirements: [ ...state.requirements, action.payload ]}),
}

const initialState = {
  requirements: [],
}

const appReducer = (state = initialState, action) => {
  if(action == null) {
    return state;
  }
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

export default appReducer;
