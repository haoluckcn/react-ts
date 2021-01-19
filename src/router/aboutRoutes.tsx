import React, { Suspense } from 'react'
import Protect from './protect'
import {Switch} from 'react-router-dom'
import Loading from '../components/Loading'

const AboutA = React.lazy(() => import(/*webpackChunkName:"abouta" */'../components/Home/about/a/a'))
const AboutB = React.lazy(() => import(/*webpackChunkName:"aboutb" */'../components/Home/about/b/b'))

const AboutRoutes:React.FC = function(){
  return <>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Protect path="/about/a" component={AboutA} level={9}></Protect>
        <Protect path="/about/b" component={AboutB}></Protect>
      </Switch>
    </Suspense>
  </>
}

export default AboutRoutes