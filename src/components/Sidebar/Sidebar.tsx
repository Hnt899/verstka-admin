import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  FunctionsIcon,
  RequisitesIcon,
  DirectoriesIcon,
  ReportsIcon,
  ServiceIcon,
  OtherIcon,
  SettingsIcon,
  ExitIcon,
} from './Icons'
import './Sidebar.css'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation()
  const [otherExpanded, setOtherExpanded] = useState(
    location.pathname.startsWith('/other') || location.pathname.startsWith('/documents')
  )
  const [directoriesExpanded, setDirectoriesExpanded] = useState(
    location.pathname.startsWith('/orders') || location.pathname.startsWith('/cuts') ||
    location.pathname.startsWith('/upd') || location.pathname.startsWith('/price') ||
    location.pathname.startsWith('/clients')
  )

  const isOtherActive = location.pathname.startsWith('/other') || 
                       location.pathname.startsWith('/documents') ||
                       location.pathname.startsWith('/glass') ||
                       location.pathname.startsWith('/frames') ||
                       location.pathname.startsWith('/layout') ||
                       location.pathname.startsWith('/materials') ||
                       location.pathname.startsWith('/pyramids') ||
                       location.pathname.startsWith('/certificates') ||
                       location.pathname.startsWith('/groups') ||
                       location.pathname.startsWith('/services')

  const isDirectoriesActive = location.pathname.startsWith('/orders') ||
                              location.pathname.startsWith('/cuts') ||
                              location.pathname.startsWith('/upd') ||
                              location.pathname.startsWith('/price') ||
                              location.pathname.startsWith('/clients')

  const otherSubItems = [
    { path: '/documents', label: 'Документы' },
    { path: '/glass', label: 'Стекла' },
    { path: '/frames', label: 'Рамки' },
    { path: '/layout', label: 'Расклад' },
    { path: '/materials', label: 'Прочие материалы' },
    { path: '/services', label: 'Услуги' },
    { path: '/certificates', label: 'Сертификаты' },
    { path: '/pyramids', label: 'Пирамиды' },
    { path: '/groups', label: 'Группы' },
  ]

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header">
        {isOpen ? (
          <div className="sidebar-logo">
            <img src="/Menu logo big.svg" alt="МИРЛИК ГЛАСС" style={{ maxWidth: '100%' }} />
          </div>
        ) : (
          <div className="sidebar-logo-mini">
            <img src="/Menu logo mini.svg" alt="МГ" style={{ maxWidth: '100%' }} />
            <button className="menu-lines" onClick={onToggle} type="button">
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </button>
          </div>
        )}
        <button className="sidebar-toggle" onClick={onToggle}>
          «
        </button>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="icon"><HomeIcon /></span>
          {isOpen && <span>Главная</span>}
        </NavLink>
        <NavLink to="/functions" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="icon"><FunctionsIcon /></span>
          {isOpen && <span>Функции</span>}
        </NavLink>
        <NavLink to="/requisites" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="icon"><RequisitesIcon /></span>
          {isOpen && <span>Реквизиты</span>}
        </NavLink>
        <div className={`sidebar-menu-item ${isDirectoriesActive ? 'parent-active' : ''}`}>
          <div
            className="sidebar-menu-parent"
            onClick={() => isOpen && setDirectoriesExpanded(!directoriesExpanded)}
          >
            <span className="icon"><DirectoriesIcon /></span>
            {isOpen && <span>Справочники</span>}
            {isOpen && (
              <span className={`chevron ${directoriesExpanded ? 'expanded' : ''}`}>
                <img src="/chevron-down.svg" alt="" />
              </span>
            )}
          </div>
          {isOpen && directoriesExpanded && (
            <div className="sidebar-submenu">
              <NavLink
                to="/orders"
                className={`sidebar-submenu-item ${location.pathname.startsWith('/orders') ? 'active' : ''}`}
              >
                <span className="submenu-icon"><DirectoriesIcon /></span>
                <span>Заказы</span>
              </NavLink>
              <NavLink
                to="/cuts"
                className={`sidebar-submenu-item ${location.pathname.startsWith('/cuts') ? 'active' : ''}`}
              >
                <span className="submenu-icon"><DirectoriesIcon /></span>
                <span>Раскрои</span>
              </NavLink>
              <NavLink
                to="/upd"
                className={`sidebar-submenu-item ${location.pathname.startsWith('/upd') ? 'active' : ''}`}
              >
                <span className="submenu-icon"><DirectoriesIcon /></span>
                <span>УПД</span>
              </NavLink>
              <NavLink
                to="/price"
                className={`sidebar-submenu-item ${location.pathname.startsWith('/price') ? 'active' : ''}`}
              >
                <span className="submenu-icon"><DirectoriesIcon /></span>
                <span>Прайс-лист</span>
              </NavLink>
              <NavLink
                to="/clients"
                className={`sidebar-submenu-item ${location.pathname.startsWith('/clients') ? 'active' : ''}`}
              >
                <span className="submenu-icon"><DirectoriesIcon /></span>
                <span>Клиенты</span>
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/reports" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="icon"><ReportsIcon /></span>
          {isOpen && <span>Отчёты</span>}
        </NavLink>
        <NavLink to="/service" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="icon"><ServiceIcon /></span>
          {isOpen && <span>Сервис</span>}
        </NavLink>
        <div className={`sidebar-menu-item ${isOtherActive ? 'parent-active' : ''}`}>
          <div
            className="sidebar-menu-parent"
            onClick={() => isOpen && setOtherExpanded(!otherExpanded)}
          >
            <span className="icon"><OtherIcon /></span>
            {isOpen && <span>Прочее</span>}
            {isOpen && (
              <span className={`chevron ${otherExpanded ? 'expanded' : ''}`}>
                <img src="/chevron-down.svg" alt="" />
              </span>
            )}
          </div>
          {isOpen && otherExpanded && (
            <div className="sidebar-submenu">
              {otherSubItems.map((item) => {
                const isActive = location.pathname === item.path || 
                                location.pathname.startsWith(item.path + '/')
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`sidebar-submenu-item ${isActive ? 'active' : ''}`}
                  >
                    <span className="submenu-icon"><OtherIcon /></span>
                    <span>{item.label}</span>
                  </NavLink>
                )
              })}
            </div>
          )}
        </div>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="icon"><SettingsIcon /></span>
          {isOpen && <span>Настройки</span>}
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/logout" className="sidebar-exit">
          <span className="icon"><ExitIcon /></span>
          {isOpen && <span>Выход</span>}
        </NavLink>
      </div>
    </aside>
  )
}
