import React from 'react'
import {connect} from 'react-redux'
import {IStoreState} from '../../../../store'
import {add,minus} from '../../../../store/actions/counter'

// 这个接口是为了告诉组件 会有那些父传子进来的属性
interface Iprops {
  num:number,
  type: string,
  dispatch: any
}

class AboutB extends React.Component<Iprops> {
  add = ():void => {
    this.props.dispatch(add(5))
  }
  minus = ():void => {
    this.props.dispatch(minus(3))
  }
  render (){
    return <div>
      AboutB
      <h2>{this.props.num} {this.props.type}</h2>
      <button onClick={this.add}>+</button>
      <button onClick={this.minus}>-</button>
    </div>
  }
}

export default connect((state:IStoreState) => {
  return {
    num: state.count.count,
    type: state.count.countType
  }
},(dispatch) => {
  return {
    dispatch
  }
})(AboutB)