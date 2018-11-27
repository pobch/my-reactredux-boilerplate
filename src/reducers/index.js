import { combineReducers } from 'redux'

import subReducer from './subReducer'

const reducers = combineReducers({
  sampleStateKey: subReducer
})

export default reducers
