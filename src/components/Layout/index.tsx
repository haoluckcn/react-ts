import React from 'react'

import { Layout } from 'antd';

import './layout.less'
import MyHeader from '../common/MyHeader'
import MySlider from '../common/MySlider'
import MyBread from '../common/MyBread'
import Routes from '../../router/routes'

const { Content } = Layout;

interface IProps {
  history: any,
  qqq: number
}

const MyLayout:React.FC<IProps> =function (props: IProps){
  // console.log(props)
  return <Layout className="layout_box">
  <MyHeader />
  <Layout>
    <MySlider collapsed={false} />
    <Layout style={{ padding: '0 24px 24px' }}>
      <MyBread />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {/* Content 根据不同的路径 在这个位置展示不同的内容 */}
        <Routes />
      </Content>
    </Layout>
  </Layout>
</Layout>
}

export default MyLayout