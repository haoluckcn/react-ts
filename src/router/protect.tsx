import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

interface IProps {
  path: string,
  component: any,
  isLogin: boolean,
  userLevel:string|number,
  level?:number|string,
  [key:string]: any
}

function Protect(props:IProps){
  if(props.isLogin) {
    if(props.level) {
      if(props.userLevel > props.level) {
        return <Route {...props}></Route>
      }else {
        return <Redirect to='/404'></Redirect>
      }
    } else {
      return <Route {...props}></Route>
    }
  } else {
    return <Redirect to='/login'></Redirect>
  }
}


export default connect((state:any) => {
  return {
    isLogin: state.userInfo.userName ? true : false,
    userLevel: state.userInfo.level
  }
})(Protect)