import React, { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './common.less'
import { MenuConfig, IMenuType } from './menu'

const { SubMenu } = Menu;
const { Sider } = Layout;

interface IProps {
  collapsed: boolean
}

const MySlider:React.FC<IProps> = function (props){

  const getMenuTreeFormAry = useCallback((data:IMenuType[]):JSX.Element[] => {
    return data.map((item:IMenuType):JSX.Element => {
      if(item.children) {
        return <SubMenu key={item.key} title={item.title} icon={item.icon}>
          { getMenuTreeFormAry(item.children) }
        </SubMenu>
      } else {
        return <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.key}>
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
      }
    })
  }, [])

  const treeDom = useMemo(() => {
    return getMenuTreeFormAry(MenuConfig)
  }, [getMenuTreeFormAry]);

  return <Sider width={200} className="site-layout-background" collapsed={props.collapsed}>
  <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
  > {treeDom} </Menu>
</Sider>
}

export default MySlider