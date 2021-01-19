import React, { Suspense } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Loading from '../components/Loading'

const Home = React.lazy(() => import(/*webpackChunkName:"home" */'../components/Home/home'))
const Form = React.lazy(() => import(/*webpackChunkName:"home" */'../components/Home/form'))
const About = React.lazy(() => import(/*webpackChunkName:"home" */'../components/Home/about'))
const User = React.lazy(() => import(/*webpackChunkName:"home" */'../components/Home/home'))

const Routes:React.FC = function(){
  return <>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/user" component={User}></Route>
        <Redirect path="/*" to="/404"></Redirect>
      </Switch>
    </Suspense>
  </>
}

export default Routes