import React from 'react'
import logo from '../../logo.svg'
import { Layout, Menu } from 'antd';
import './common.less'
const { Header } = Layout;

const MyHeader:React.FC = function (){
  return <Header className="header" id="components-layout-demo-top-side-2">
  <div className="logo">
    <img src={logo} alt=""/>
  </div>
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    <Menu.Item key="1">nav 1</Menu.Item>
    <Menu.Item key="2">nav 2</Menu.Item>
    <Menu.Item key="3">nav 3</Menu.Item>
  </Menu>
</Header>
}

export default MyHeader