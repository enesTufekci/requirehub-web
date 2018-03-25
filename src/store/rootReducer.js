import { combineReducers } from 'redux'

import appReducer from '../appReducer'
import requirementReducer from 'components/Requirement/requirementReducer'

export default combineReducers({
  app: appReducer,
  requirement: requirementReducer
})
