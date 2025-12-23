import { useNavigate } from 'react-router-dom'
import '../../../components/Form/Form.css'
import './BalancesTab.css'

export default function BalancesTab() {
  const navigate = useNavigate()

  return (
    <div className="balances-tab">
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Типа 0</label>
          <input type="text" className="form-input" placeholder="Введите основание" />
        </div>
        <div className="form-group">
          <label className="form-label">Типа 1</label>
          <input type="text" className="form-input" placeholder="Введите основание" />
        </div>
      </div>
      <button className="form-button" onClick={() => navigate('/clients')}>
        Сохранить
      </button>
    </div>
  )
}

