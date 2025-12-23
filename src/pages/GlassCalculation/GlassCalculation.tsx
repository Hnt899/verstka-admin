import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import '../../components/Form/Form.css'
import './GlassCalculation.css'

export default function GlassCalculation() {
  const navigate = useNavigate()

  return (
    <div className="glass-calculation-page">
      <div className="back-link-wrapper">
        <button className="back-link" onClick={() => navigate('/layout')}>
          Вернуться назад
        </button>
      </div>
      <h1 className="glass-calculation-title">Расчет стеклопакета</h1>
      <Card title="">
        <div className="calculation-form">
          <div className="form-group">
            <label className="form-label">Наименование</label>
            <input
              type="text"
              className="form-input"
              defaultValue="Раскладка 18 мм белая"
            />
          </div>
          <div className="calculation-rows">
            <div className="calculation-row">
              <input
                type="text"
                className="calculation-input"
                defaultValue="Крест 18 мм"
              />
              <select className="calculation-select">
                <option>Пара</option>
              </select>
              <input
                type="text"
                className="calculation-input"
                defaultValue="18"
              />
              <input
                type="text"
                className="calculation-input"
                defaultValue="0"
              />
            </div>
            <div className="calculation-row">
              <input
                type="text"
                className="calculation-input"
                defaultValue="Торцевая деталь"
              />
              <select className="calculation-select">
                <option>Шт</option>
              </select>
              <input
                type="text"
                className="calculation-input"
                defaultValue="30"
              />
              <input
                type="text"
                className="calculation-input"
                defaultValue="0"
              />
            </div>
            <div className="calculation-row">
              <input
                type="text"
                className="calculation-input"
                defaultValue="Раскладка 18 мм белая"
              />
              <select className="calculation-select">
                <option>Погонный метр</option>
              </select>
              <input
                type="text"
                className="calculation-input"
                defaultValue="200"
              />
              <input
                type="text"
                className="calculation-input"
                defaultValue="0"
              />
            </div>
          </div>
          <button className="form-button" onClick={() => navigate('/layout')}>
            Выбрать
          </button>
        </div>
      </Card>
    </div>
  )
}

