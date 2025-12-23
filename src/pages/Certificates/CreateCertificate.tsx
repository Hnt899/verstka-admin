import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../components/Form/Form.css'
import './CreateCertificate.css'

interface CertificateRow {
  id: number
  manufacturer: string
  fileName: string
}

export default function CreateCertificate() {
  const navigate = useNavigate()
  const [floatRows, setFloatRows] = useState<CertificateRow[]>([{ id: 1, manufacturer: '', fileName: '' }])
  const [energyRows, setEnergyRows] = useState<CertificateRow[]>([{ id: 1, manufacturer: '', fileName: '' }])
  const [multiRows, setMultiRows] = useState<CertificateRow[]>([{ id: 1, manufacturer: '', fileName: '' }])
  const [tintedRows, setTintedRows] = useState<CertificateRow[]>([{ id: 1, manufacturer: '', fileName: '' }])

  const addRow = (setter: React.Dispatch<React.SetStateAction<CertificateRow[]>>) => {
    setter((prev) => [...prev, { id: Date.now(), manufacturer: '', fileName: '' }])
  }

  const removeRow = (
    setter: React.Dispatch<React.SetStateAction<CertificateRow[]>>,
    id: number
  ) => {
    setter((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev))
  }

  const renderSection = (
    title: string,
    rows: CertificateRow[],
    setRows: React.Dispatch<React.SetStateAction<CertificateRow[]>>
  ) => (
    <div className="certificate-section">
      <h3 className="section-title">{title}</h3>
      {rows.map((row) => (
        <div key={row.id} className="certificate-row">
          <input
            type="text"
            className="form-input"
            placeholder="Производитель"
            value={row.manufacturer}
            onChange={(e) => {
              setRows((prev) =>
                prev.map((r) => (r.id === row.id ? { ...r, manufacturer: e.target.value } : r))
              )
            }}
          />
          <input
            type="text"
            className="form-input"
            placeholder="Наименование файла"
            value={row.fileName}
            onChange={(e) => {
              setRows((prev) =>
                prev.map((r) => (r.id === row.id ? { ...r, fileName: e.target.value } : r))
              )
            }}
          />
          <button className="upload-button">Загрузить файл</button>
          <button
            className="remove-button"
            onClick={() => removeRow(setRows, row.id)}
            type="button"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        className="add-certificate-link"
        onClick={() => addRow(setRows)}
      >
        Добавить сертификат +
      </button>
    </div>
  )

  return (
    <div className="create-certificate-page">
      <h1 className="create-certificate-title">Добавить сертификат</h1>
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

        <div className="certificates-grid">
          {renderSection('Стекло флоат', floatRows, setFloatRows)}
          {renderSection('Стекло энергосберегающее', energyRows, setEnergyRows)}
          {renderSection('Стекло мультифункциональное', multiRows, setMultiRows)}
          {renderSection('Стекло тонированное', tintedRows, setTintedRows)}
        </div>

        <div className="certificate-section">
          <h3 className="section-title">Общий сертификат на стеклопакеты</h3>
          <div className="file-upload-row">
            <input
              type="text"
              className="form-input"
              placeholder="Наименование файла"
            />
            <button className="upload-button">Загрузить файл</button>
          </div>
        </div>

        <div className="files-grid">
          <div className="file-upload-item">
            <label className="form-label">Теокол</label>
            <div className="file-upload-row">
              <input
                type="text"
                className="form-input"
                placeholder="Наименование файла"
              />
              <button className="upload-button">Загрузить файл</button>
            </div>
          </div>
          <div className="file-upload-item">
            <label className="form-label">Бутил</label>
            <div className="file-upload-row">
              <input
                type="text"
                className="form-input"
                placeholder="Наименование файла"
              />
              <button className="upload-button">Загрузить файл</button>
            </div>
          </div>
          <div className="file-upload-item">
            <label className="form-label">Сито</label>
            <div className="file-upload-row">
              <input
                type="text"
                className="form-input"
                placeholder="Наименование файла"
              />
              <button className="upload-button">Загрузить файл</button>
            </div>
          </div>
          <div className="file-upload-item">
            <label className="form-label">Рамка</label>
            <div className="file-upload-row">
              <input
                type="text"
                className="form-input"
                placeholder="Наименование файла"
              />
              <button className="upload-button">Загрузить файл</button>
            </div>
          </div>
        </div>

        <button className="form-button" onClick={() => navigate('/certificates')}>
          Сохранить
        </button>
        </div>
      </div>
    </div>
  )
}

