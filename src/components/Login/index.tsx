import React, { useCallback } from 'react'
import {loginFn} from '../../store/actions'
import {IStoreState} from '../../store'
import  {connect} from 'react-redux'

interface IProps {
  dispatch: any,
  info: any
}

const Login: React.FC<IProps> = function(props) {
  const login = useCallback(() => {
    props.dispatch(loginFn({
      username: 'zs',
      userpsw: '666'
    }))
  }, [props])
  return <div className=''>
    登录页 {JSON.stringify(props.info)}
    <button onClick={login}>登录</button>
  </div>
}

export default connect((state:IStoreState) => {
  return{
    info: state.userInfo
  }
}, (dispatch) => {
  return {
    dispatch
  }
})(Login)