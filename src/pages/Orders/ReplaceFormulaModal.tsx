import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import '../../components/Form/Form.css'
import './ReplaceFormulaModal.css'

interface ReplaceFormulaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReplaceFormulaModal({ isOpen, onClose }: ReplaceFormulaModalProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Заменить формулу">
      <div className="replace-formula-form">
        <div className="form-group">
          <label className="form-label">Выберите формулу</label>
          <div className="select-wrapper">
            <select
              className="form-input"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onBlur={() => setIsDropdownOpen(false)}
            >
              <option value="">Выбрать</option>
            </select>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <div className="search-box">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Поиск..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="dropdown-list">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="dropdown-item">
                      Формула
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="form-button replace-button" onClick={onClose}>
          Заменить
        </button>
      </div>
    </Modal>
  )
}

