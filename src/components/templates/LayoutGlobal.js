'use client'
import { Layout } from 'antd'
import { Sidebar } from '../modules/Sidebar'
import { Header } from '../modules/Header'
import { Footer } from '../modules/Footer'

const { Content } = Layout
export const LayoutGlobal = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  )
}
