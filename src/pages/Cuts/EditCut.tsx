import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import DateRange from '../../components/DateRange/DateRange'
import Table from '../../components/Table/Table'
import '../../components/Form/Form.css'
import './EditCut.css'

export default function EditCut() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [hasOrders, setHasOrders] = useState(false)
  const [hasUncutOrders, setHasUncutOrders] = useState(false)

  const ordersColumns = [
    { key: 'number', label: '№' },
    { key: 'totalPcs', label: 'Всего шт.' },
    { key: 'totalM2', label: 'Всего, м2' },
    { key: 'taskNumber', label: '№ задания' },
    { key: 'date', label: 'Дата' },
    { key: 'client', label: 'Клиент' },
  ]

  const ordersData = Array.from({ length: 3 }, (_, i) => ({
    number: i + 1,
    totalPcs: 'Кол-во штук',
    totalM2: '00',
    taskNumber: i + 1,
    date: '12.12.2025',
    client: 'ИП Попов И. А.',
  }))

  const uncutColumns = [
    { key: 'checkbox', label: '' },
    { key: 'taskNumber', label: '№ задания' },
    { key: 'date', label: 'Дата' },
    { key: 'client', label: 'Клиент' },
    { key: 'formula', label: 'Формула' },
    { key: 'quantity', label: 'Кол-во' },
    { key: 'uncut', label: 'Не раскроено' },
  ]

  const uncutData = Array.from({ length: 2 }, (_, i) => ({
    checkbox: <input type="checkbox" />,
    taskNumber: i + 1,
    date: '12.12.2025',
    client: 'ИП Попов И. А.',
    formula: 'Формула',
    quantity: 'Кол-во',
    uncut: 'Не раскроено',
  }))

  return (
    <div className="edit-cut-page">
      <h1 className="edit-cut-title">Редактирование раскроя: {id || '216'}</h1>

      <Card title="Основная информация">
        <div className="edit-cut-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Задание №</label>
              <input
                type="text"
                className="form-input"
                defaultValue={id || '216'}
                placeholder="Введите номер задания"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Изделий в раскрое</label>
              <input
                type="text"
                className="form-input"
                defaultValue="0"
                placeholder="Введите кол-во"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Дата раскроя</label>
              <input
                type="text"
                className="form-input"
                defaultValue="27.11.2025"
                placeholder="Введите дату раскроя"
              />
            </div>
            <div className="form-group">
              <label className="form-label">м2 в раскрое</label>
              <input
                type="text"
                className="form-input"
                defaultValue="0"
                placeholder="Введите число в м2"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Комментарий</label>
            <textarea
              className="form-input"
              rows={3}
              placeholder="Укажите комментарий"
            />
          </div>
          <button className="form-button" onClick={() => navigate('/cuts')}>
            Сохранить
          </button>
        </div>
      </Card>

      <Card title="Заказы в раскрое">
        {!hasOrders ? (
          <div className="empty-state">
            <div className="empty-icon">🛒</div>
            <div className="empty-text">Здесь будут отображаться заказы в раскрое</div>
          </div>
        ) : (
          <div className="orders-table-wrapper">
            <Table columns={ordersColumns} data={ordersData} selectable={false} />
          </div>
        )}
      </Card>

      <Card title="Нераскроенные заказы за период">
        <div className="uncut-filter">
          <DateRange label="Период" />
          <button
            className="form-button apply-button"
            onClick={() => setHasUncutOrders(true)}
          >
            Применить
          </button>
        </div>
        {!hasUncutOrders ? (
          <div className="empty-state">
            <div className="empty-icon">🛒</div>
            <div className="empty-text">
              Выберите период и здесь будут отобразятся нераскроенные заказы за необходимый период
            </div>
          </div>
        ) : (
          <>
            <div className="uncut-table-wrapper">
              <Table columns={uncutColumns} data={uncutData} selectable={false} />
            </div>
            <button className="form-button" onClick={() => navigate('/cuts')}>
              Сохранить
            </button>
          </>
        )}
      </Card>
    </div>
  )
}

