import React from 'react'
import { BankOutlined,AppstoreOutlined } from '@ant-design/icons'

export interface IMenuType {
  key: string,
  title: string,
  icon?: any,
  children?: IMenuType[]
}
export const MenuConfig:IMenuType[] = [
  {
    key: '/',
    title: '首页',
    icon: <BankOutlined/>,
  },
  {
    key: '/form',
    title: '列表页',
    icon: <AppstoreOutlined />
  },
  {
    key: '/about',
    title: '关于',
    icon: <BankOutlined/>,
    children: [
      {
        key: '/about/a',
        title: '关于a'
      },
      {
        key: '/about/b',
        title: '关于b'
      },
    ]
  },
  {
    key: '/user',
    title: '用户中心',
    icon: <AppstoreOutlined />
  }
]