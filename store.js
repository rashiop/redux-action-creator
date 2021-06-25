import { combineReducers, createStore } from 'redux'

import apiReducer from 'redux/api'
import customerReducer from 'redux/customer/reducer'

const rootReducer = combineReducers({
  api: apiReducer,
  customer: customerReducer,
})

const store = createStore(rootReducer)

export default store;