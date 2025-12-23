import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreatePyramid.css'

export default function CreatePyramid() {
  const navigate = useNavigate()

  return (
    <div className="create-pyramid-page">
      <h1 className="create-pyramid-title">Добавить пирамиду</h1>
      <div className="create-form-wrapper">
        <div className="form">
        <div className="form-group">
          <label className="form-label">Наименование</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите наименование"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Сивольный код</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите код"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Длина</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите длину"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Ширина</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите ширину"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Количество</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите количество"
          />
        </div>
        <button className="form-button" onClick={() => navigate('/pyramids')}>
          Сохранить
        </button>
        </div>
      </div>
    </div>
  )
}

