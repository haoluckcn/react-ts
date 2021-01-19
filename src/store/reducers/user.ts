import {UPDATEUSERINFO} from '../types'

export interface IUser{
  name: string,
  age: number,
  address: string,
  [key:string]: any
}

interface IAction {
  type: string,
  info: IUser
}

let storageStr = localStorage.getItem('crmuserinfo')
let defaultState:IUser = storageStr ? JSON.parse(storageStr) : {
  name: '',
  age: 0,
  address: ''
}

export function userReducer(state: IUser=defaultState,action: IAction){
  if(action.type === UPDATEUSERINFO) {
    localStorage.setItem('crmuserinfo', JSON.stringify(action.info))
    return action.info
  } else {
    return state
  }
}