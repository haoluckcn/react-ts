import { combineReducers } from 'redux'
import {CounterReducer} from './count'
import {userReducer} from './user'

export default combineReducers({
  count: CounterReducer,
  userInfo: userReducer
})