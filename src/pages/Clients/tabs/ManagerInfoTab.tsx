import { useNavigate } from 'react-router-dom'
import '../../../components/Form/Form.css'
import './ManagerInfoTab.css'

export default function ManagerInfoTab() {
  const navigate = useNavigate()

  return (
    <div className="manager-info-tab">
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Должность в им. падеже</label>
          <input type="text" className="form-input" placeholder="Введите должность" />
        </div>
        <div className="form-group">
          <label className="form-label">ФИО руководителя в им. падеже</label>
          <input type="text" className="form-input" placeholder="Введите ФИО руководителя" />
        </div>
        <div className="form-group">
          <label className="form-label">Должность в род. падеже</label>
          <input type="text" className="form-input" placeholder="Введите должность" />
        </div>
        <div className="form-group">
          <label className="form-label">ФИО руководителя в род. падеже</label>
          <input type="text" className="form-input" placeholder="Введите ФИО руководителя" />
        </div>
      </div>
      <div className="form-group full-width">
        <label className="form-label">Руководитель действует на основании</label>
        <input type="text" className="form-input" placeholder="Введите основание" />
      </div>
      <button className="form-button" onClick={() => navigate('/clients')}>
        Сохранить
      </button>
    </div>
  )
}

