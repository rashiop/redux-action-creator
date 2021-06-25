import { combineReducers } from 'redux'
import { loadingReducer } from './loading/reducer'
import { successReducer } from './success/reducer'

export default combineReducers({
  loading: loadingReducer,
  success: successReducer,
})
