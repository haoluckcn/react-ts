import { ADD,MINUS } from '../types'

// 这个接口是为了告诉ts count 有那些属性
export interface ICount {
  count: number,
  countType: string
}
interface IAction {
  type: string,
  num: number
}

const defaultState: ICount = {
  count: 100,
  countType: '偶数'
}

export function CounterReducer(state:ICount=defaultState, action:IAction):ICount {
  let {count,countType} = state
  switch (action.type) {
    case ADD:
      count = count + action.num
      break;
    case MINUS:
        count = count - action.num
        break;
    default:
      break;
  }
  countType = count % 2 === 0 ? '偶数' : '奇数'
  return {
    count,
    countType
  }
}