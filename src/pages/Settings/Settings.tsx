import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UsersTab from './UsersTab'
import RolesTab from './RolesTab'
import PermissionsTab from './PermissionsTab'
import RulesTab from './RulesTab'
import './Settings.css'

export default function Settings() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('users')
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const createAreaRef = useRef<HTMLDivElement | null>(null)

  const tabs = [
    { id: 'users', label: 'Пользователи' },
    { id: 'roles', label: 'Роли' },
    { id: 'permissions', label: 'Разрешения' },
    { id: 'rules', label: 'Правила' },
  ]

  const createMenuItems = [
    { label: 'создать аккаунт', path: '/settings/create-account' },
    { label: 'создать роль', path: '/settings/create-role' },
    { label: 'создать разрешение', path: '/settings/create-permission' },
    { label: 'создать правило', path: '/settings/create-rule' },
  ]

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!isCreateOpen) return
      const target = e.target as Node
      if (createAreaRef.current && !createAreaRef.current.contains(target)) {
        setIsCreateOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [isCreateOpen])

  return (
    <div className="settings-page">
      <div className="settings-tabs-wrapper">
        <div className="settings-tabs-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
          <div className="settings-create" ref={createAreaRef}>
            <button
              className={`settings-create-button ${isCreateOpen ? 'open' : ''}`}
              onClick={() => setIsCreateOpen((v) => !v)}
              type="button"
            >
              Создать <span className="settings-create-caret">▼</span>
            </button>
            {isCreateOpen && (
              <div className="settings-create-menu">
                {createMenuItems.map((item) => (
                  <button
                    key={item.path}
                    className="settings-create-item"
                    type="button"
                    onClick={() => {
                      setIsCreateOpen(false)
                      navigate(item.path)
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="settings-content">
        {activeTab === 'users' && <UsersTab />}
        {activeTab === 'roles' && <RolesTab />}
        {activeTab === 'permissions' && <PermissionsTab />}
        {activeTab === 'rules' && <RulesTab />}
      </div>
    </div>
  )
}

