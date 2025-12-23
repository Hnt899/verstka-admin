import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreateForms.css'
import './Settings.css'

export default function CreateRule() {
  const navigate = useNavigate()
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const createAreaRef = useRef<HTMLDivElement | null>(null)

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
      <h1 className="settings-page-title">Настройки</h1>
      <div className="settings-tabs-wrapper">
        <div className="settings-tabs-inner">
          <button className="settings-tab" onClick={() => navigate('/settings')}>
            Пользователи
          </button>
          <button className="settings-tab" onClick={() => navigate('/settings')}>
            Роли
          </button>
          <button className="settings-tab" onClick={() => navigate('/settings')}>
            Разрешения
          </button>
          <button className="settings-tab" onClick={() => navigate('/settings')}>
            Правила
          </button>
          <div className="settings-create" ref={createAreaRef}>
            <button
              className={`settings-create-button active ${isCreateOpen ? 'open' : ''}`}
              onClick={() => setIsCreateOpen((v) => !v)}
              type="button"
            >
              Создать правило <span className="settings-create-caret">▼</span>
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
      <div className="settings-content-wrapper">
        <div className="create-form-page">
          <h2 className="create-form-title">Создать правило</h2>
          <div className="form">
            <div className="form-group">
              <label className="form-label">Имя</label>
              <input
                type="text"
                className="form-input"
                placeholder="Введите имя"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Имя класса правила</label>
              <input
                type="text"
                className="form-input"
                defaultValue="yii\\rbac\\Rule"
              />
            </div>
            <button className="form-button" onClick={() => navigate('/settings')}>
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
