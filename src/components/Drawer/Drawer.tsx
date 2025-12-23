import './Drawer.css'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Drawer({ isOpen, onClose, title, children }: DrawerProps) {
  if (!isOpen) return null

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2 className="drawer-title">{title}</h2>
          <button className="drawer-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="drawer-body">{children}</div>
      </div>
    </div>
  )
}

