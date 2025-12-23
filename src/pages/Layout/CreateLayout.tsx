import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreateLayout.css'

interface DetailRow {
  id: number
  detail: string
  unit: string
  price: string
}

export default function CreateLayout() {
  const navigate = useNavigate()
  const [details, setDetails] = useState<DetailRow[]>([
    { id: 1, detail: '', unit: '', price: '' },
  ])

  const addDetail = () => {
    setDetails([...details, { id: Date.now(), detail: '', unit: '', price: '' }])
  }

  const removeDetail = (id: number) => {
    if (details.length > 1) {
      setDetails(details.filter((d) => d.id !== id))
    }
  }

  return (
    <div className="create-layout-page">
      <h1 className="create-layout-title">Добавить запись</h1>
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
        <div className="details-section">
          <label className="form-label">Детали</label>
          {details.map((detail) => (
            <div key={detail.id} className="detail-row">
              <input
                type="text"
                className="form-input detail-input"
                placeholder="Деталь"
                value={detail.detail}
                onChange={(e) => {
                  const updated = details.map((d) =>
                    d.id === detail.id ? { ...d, detail: e.target.value } : d
                  )
                  setDetails(updated)
                }}
              />
              <select
                className="form-input detail-select"
                value={detail.unit}
                onChange={(e) => {
                  const updated = details.map((d) =>
                    d.id === detail.id ? { ...d, unit: e.target.value } : d
                  )
                  setDetails(updated)
                }}
              >
                <option value="">Единица измерения</option>
              </select>
              <input
                type="text"
                className="form-input detail-input"
                placeholder="Цена"
                value={detail.price}
                onChange={(e) => {
                  const updated = details.map((d) =>
                    d.id === detail.id ? { ...d, price: e.target.value } : d
                  )
                  setDetails(updated)
                }}
              />
              <button
                className="detail-remove-button"
                onClick={() => removeDetail(detail.id)}
                type="button"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            className="add-detail-link"
            onClick={addDetail}
          >
            Добавить детали +
          </button>
        </div>
        <button className="form-button" onClick={() => navigate('/layout')}>
          Сохранить
        </button>
        </div>
      </div>
    </div>
  )
}

