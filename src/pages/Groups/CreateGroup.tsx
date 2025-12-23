import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreateGroup.css'

export default function CreateGroup() {
  const navigate = useNavigate()

  return (
    <div className="create-group-page">
      <h1 className="create-group-title">Добавить территориальную группу</h1>
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
          <label className="form-label">Локация</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите локацию"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Пирамиды</label>
          <select className="form-input">
            <option value="">Выбрать</option>
          </select>
        </div>
        <div className="form-checkbox-group">
          <input type="checkbox" className="form-checkbox" id="all-pyramids" />
          <label className="form-checkbox-label" htmlFor="all-pyramids">
            Все пирамиды
          </label>
        </div>
        <button className="form-button" onClick={() => navigate('/groups')}>
          Сохранить
        </button>
        </div>
      </div>
    </div>
  )
}

