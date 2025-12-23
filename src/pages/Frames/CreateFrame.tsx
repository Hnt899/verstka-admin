import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreateFrame.css'

export default function CreateFrame() {
  const navigate = useNavigate()

  return (
    <div className="create-frame-page">
      <h1 className="create-frame-title">Добавить рамку</h1>
      <div className="create-form-wrapper">
        <div className="form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Наименование</label>
            <input
              type="text"
              className="form-input"
              placeholder="Введите наименование"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Сито</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Толщина</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Теокол</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Вес</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Бутил</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
        </div>
        <button className="form-button" onClick={() => navigate('/frames')}>
          Сохранить
        </button>
        </div>
      </div>
    </div>
  )
}

