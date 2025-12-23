import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreateService.css'

export default function CreateService() {
  const navigate = useNavigate()

  return (
    <div className="create-service-page">
      <h1 className="create-service-title">Добавить услугу</h1>
      <div className="create-form-wrapper">
        <div className="form">
        <div className="form-group">
          <label className="form-label">Название услуги</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите название"
          />
        </div>
        <button className="form-button" onClick={() => navigate('/services')}>
          Сохранить
        </button>
        </div>
      </div>
    </div>
  )
}

