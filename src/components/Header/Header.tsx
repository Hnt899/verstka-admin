import { useNavigate } from 'react-router-dom'
import './Header.css'

interface HeaderProps {
  breadcrumbs?: string[]
  title?: string
}

const breadcrumbPaths: Record<string, string> = {
  'Главная': '/',
  'Функции': '/functions',
  'Реквизиты': '/requisites',
  'Сервис': '/service',
  'Настройки': '/settings',
  'Отчёты': '/reports',
  'Справочники': '/orders',
  'Заказы': '/orders',
  'Раскрои': '/cuts',
  'УПД': '/upd',
  'Прайс-лист': '/price',
  'Клиенты': '/clients',
  'Прочее': '/documents',
  'Документы': '/documents',
  'Стекла': '/glass',
  'Рамки': '/frames',
  'Расклад': '/layout',
  'Прочие материалы': '/materials',
  'Услуги': '/services',
  'Сертификаты': '/certificates',
  'Пирамиды': '/pyramids',
  'Группы': '/groups',
}

export default function Header({ breadcrumbs, title }: HeaderProps) {
  const navigate = useNavigate()

  const getBreadcrumbPath = (crumb: string, index: number, allCrumbs: string[]): string | null => {
    if (index === allCrumbs.length - 1) return null // Последний элемент не кликабелен
    
    // Прямое соответствие
    if (breadcrumbPaths[crumb]) {
      return breadcrumbPaths[crumb]
    }
    
    // Для "Редактирование", "Добавление", "Создание" и подобных - возвращаемся на уровень выше
    if (crumb.includes('Редактирование') || crumb.includes('Добавление') || crumb.includes('Создание') || 
        crumb.includes('Настройка') || crumb.match(/^\d+$/)) {
      const parent = allCrumbs[index - 1]
      return breadcrumbPaths[parent] || null
    }
    
    return null
  }

  // Проверяем, является ли это главной страницей (только "Главная" в breadcrumbs)
  const isHomePage = breadcrumbs && breadcrumbs.length === 1 && breadcrumbs[0] === 'Главная'

  return (
    <header className="header">
      <div className="header-top">
        {isHomePage ? (
          <h1 className="header-welcome">Добро пожаловать, Admin!</h1>
        ) : breadcrumbs && (
          <nav className="breadcrumbs">
            {breadcrumbs.map((crumb, index) => {
              const path = getBreadcrumbPath(crumb, index, breadcrumbs)
              const isLast = index === breadcrumbs.length - 1
              
              return (
                <span key={index}>
                  {index > 0 && <span className="breadcrumb-separator"> / </span>}
                  {path && !isLast ? (
                    <a
                      href={path}
                      className="breadcrumb-link"
                      onClick={(e) => {
                        e.preventDefault()
                        navigate(path)
                      }}
                    >
                      {crumb}
                    </a>
                  ) : (
                    <span className={isLast ? 'breadcrumb-active' : ''}>
                      {crumb}
                    </span>
                  )}
                </span>
              )
            })}
          </nav>
        )}
      </div>
      {title && !isHomePage && <h1 className="header-title">{title}</h1>}
    </header>
  )
}

