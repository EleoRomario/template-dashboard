'use client'
import { Layout, Menu } from 'antd'
import { sidebarData } from './data/sidebarData'

const { Sider } = Layout

export const Sidebar = () => {
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      zeroWidthTriggerStyle={{
        top: 10,
        background: '#fff',
      }}
      theme='light'
      style={{
        position: 'relative',
        height: '100vh',
        left: 0,
      }}>
      <div className='logo' />
      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={['4']}
        items={sidebarData}
      />
    </Sider>
  )
}
