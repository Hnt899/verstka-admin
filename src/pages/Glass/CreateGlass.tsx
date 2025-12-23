import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreateGlass.css'

export default function CreateGlass() {
  const navigate = useNavigate()

  return (
    <div className="create-glass-page">
      <h1 className="create-glass-title">Добавить стекло</h1>
      <div className="create-form-wrapper">
        <div className="form">
        <div className="form-group">
          <label className="form-label">Наименование</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите наимеование"
          />
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
            <label className="form-label">Вес</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Li-Opt Наименование</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите Li-Opt наименование"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Ко-эф отхода</label>
          <input
            type="number"
            className="form-input"
            defaultValue="1"
          />
        </div>
        <div className="form-checkbox-group">
          <input type="checkbox" className="form-checkbox" id="triplex" />
          <label className="form-checkbox-label" htmlFor="triplex">
            Триплекс
          </label>
        </div>
        <div className="form-checkbox-group">
          <input type="checkbox" className="form-checkbox" id="output-report" />
          <label className="form-checkbox-label" htmlFor="output-report">
            Вывод в отчет
          </label>
        </div>
        <button className="form-button" onClick={() => navigate('/glass')}>
          Сохранить
        </button>
        </div>
      </div>
    </div>
  )
}

