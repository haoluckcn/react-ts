import React,{Suspense} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Loading from '../components/Loading'
import NoFound from '../components/NoFound'
import Protec from './protect'

const Login = React.lazy(() => import(/*webpackChunkName: "login"*/  '../components/Login'))
const MyLayout = React.lazy(() => import(/*webpackChunkName: "login"*/  '../components/Layout'))
// React.lazy 结合 Suspense 可以实现 组件的按需加载

interface Iprops {
  name: string
}
const App:React.FC<Iprops> = function(props) {
  // 正常登陆 和 正常能看的页面 是兄弟
  return <HashRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/404" component={NoFound}></Route>
        <Protec path="/" component={MyLayout}></Protec>
      </Switch>
    </Suspense>
  </HashRouter>
}

export default App