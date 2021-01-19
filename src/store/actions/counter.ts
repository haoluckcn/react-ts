import {ADD,MINUS} from '../types'
import {Dispatch} from 'redux'

export function add(val:number) {
  return (dispatch:Dispatch) => {
    dispatch({type:ADD,num:val})
  }
}

export function minus(val:number) {
  return (dispatch:Dispatch) => {
    dispatch({type:MINUS,num:val})
  }
}