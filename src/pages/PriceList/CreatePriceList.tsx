import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import '../../components/Form/Form.css'
import './CreatePriceList.css'

export default function CreatePriceList() {
  const navigate = useNavigate()
  const [glasses, setGlasses] = useState([{ id: 1 }])
  const [frames, setFrames] = useState([{ id: 1 }])

  const addGlass = () => {
    setGlasses([...glasses, { id: Date.now() }])
  }

  const removeGlass = (id: number) => {
    setGlasses(glasses.filter((g) => g.id !== id))
  }

  const addFrame = () => {
    setFrames([...frames, { id: Date.now() }])
  }

  const removeFrame = (id: number) => {
    setFrames(frames.filter((f) => f.id !== id))
  }

  return (
    <div className="create-price-list-page">
      <h1 className="create-price-list-title">Создание прайс-листа</h1>
      <Card title="">
        <div className="price-list-form">
          <div className="form-group">
            <label className="form-label">Формула стеклопакета</label>
            <input type="text" className="form-input" placeholder="Введите формулу" />
          </div>
          <div className="form-row-3">
            <div className="form-group">
              <label className="form-label">Цена за м2</label>
              <input type="number" className="form-input" defaultValue="0" />
            </div>
            <div className="form-group">
              <label className="form-label">Цена за штуку</label>
              <input type="number" className="form-input" defaultValue="0" />
            </div>
            <div className="form-group">
              <label className="form-label">Однокамерный / Двухкамерный</label>
              <select className="form-input">
                <option value="">Выбрать</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <div className="section-header">
              <h3 className="section-title">Стекла</h3>
            </div>
            {glasses.map((glass) => (
              <div key={glass.id} className="repeatable-row">
                <select className="form-input">
                  <option value="">Выбрать</option>
                </select>
                <button
                  className="remove-button"
                  onClick={() => removeGlass(glass.id)}
                  title="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
            <button className="add-link" onClick={addGlass}>
              Добавить стекла +
            </button>
          </div>

          <div className="form-section">
            <div className="section-header">
              <h3 className="section-title">Рамы</h3>
            </div>
            {frames.map((frame) => (
              <div key={frame.id} className="repeatable-row">
                <select className="form-input">
                  <option value="">Выбрать</option>
                </select>
                <button
                  className="remove-button"
                  onClick={() => removeFrame(frame.id)}
                  title="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
            <button className="add-link" onClick={addFrame}>
              Добавить рамы +
            </button>
          </div>

          <button className="form-button" onClick={() => navigate('/price')}>
            Сохранить
          </button>
        </div>
      </Card>
    </div>
  )
}

