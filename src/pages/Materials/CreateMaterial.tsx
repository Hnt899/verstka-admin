import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreateMaterial.css'

export default function CreateMaterial() {
  const navigate = useNavigate()

  return (
    <div className="create-material-page">
      <h1 className="create-material-title">Добавить прочий материал</h1>
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
            <label className="form-label">% отхода на 1 п.м рамки</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Рамка</label>
            <select className="form-input">
              <option value="">Выбор рамки</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Уголки</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Стекло</label>
            <select className="form-input">
              <option value="">Выбор стекла</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Пробки</label>
            <input
              type="number"
              className="form-input"
              defaultValue="0"
            />
          </div>
        </div>
        <button className="form-button" onClick={() => navigate('/materials')}>
          Сохранить
        </button>
        </div>
      </div>
    </div>
  )
}

