import {login,ILogin} from '../../api'
import {UPDATEUSERINFO} from '../types'
import {Dispatch} from 'redux'

export function loginFn(params: ILogin) {
  return (dispatch:Dispatch) => {
    return login(params).then(data => {
      dispatch({
        type: UPDATEUSERINFO,
        info: data.data
      })
    })
  }
}