import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
  breadcrumbs?: string[]
  title?: string
}

export default function Layout({ children, breadcrumbs, title }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className={`layout-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <Header breadcrumbs={breadcrumbs} title={title} />
        <main className="main-content">{children}</main>
      </div>
    </div>
  )
}

