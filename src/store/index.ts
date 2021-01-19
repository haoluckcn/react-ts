import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { ICount } from './reducers/count'
import {IUser} from './reducers/user'

// 这个接口是为了 在组件中使用connect的时候 告诉ts 当前的state中有那些属性
export interface IStoreState {
  count: ICount,
  userInfo: IUser
}

let store = createStore(rootReducer, applyMiddleware(thunk))

// console.log(process.env)

export default store