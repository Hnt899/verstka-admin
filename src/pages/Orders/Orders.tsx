import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import DateRange from '../../components/DateRange/DateRange'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import '../../components/Form/Form.css'
import './Orders.css'

export default function Orders() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: 'checkbox', label: '' },
    { key: 'number', label: '№', sortable: true },
    { key: 'upd', label: 'УПД', searchable: true },
    { key: 'payment', label: 'Оплата' },
    { key: 'client', label: 'Клиент', searchable: true },
    { key: 'comment', label: 'Комментарий', searchable: true },
    { key: 'delivery', label: 'Доставка', searchable: true },
    { key: 'receiptDate', label: 'Дата приёма' },
    { key: 'shipmentDate', label: 'Дата отгрузки' },
    { key: 'quantity', label: 'Кол-во' },
    { key: 'area', label: 'Площадь' },
    { key: 'goodsAmount', label: 'Сумма товаров' },
    { key: 'layoutAmount', label: 'Сумма раскладки' },
    { key: 'total', label: 'Итого' },
    { key: 'status', label: 'Статус' },
    { key: 'state', label: 'Состояние', searchable: true },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 14 }, (_, i) => ({
    checkbox: <input type="checkbox" defaultChecked={i === 0} />,
    number: i + 1,
    upd: 'Отсутствует',
    payment: i === 1 ? 'Нет' : 'Да',
    paymentStatus: i === 1 ? 'no' : 'yes',
    client: 'ИП Попова E. A.',
    comment: 'Нужно расчитать стоимость и перезвонить клиенту',
    delivery: 'В цех',
    receiptDate: '12.12.2025',
    shipmentDate: '20.12.2025',
    quantity: '12',
    area: '8.68',
    goodsAmount: '16 000',
    layoutAmount: '0',
    total: '16 000',
    status: '1',
    state: 'В производстве',
    actions: (
      <div className="table-actions">
        <button className="action-button edit" title="Редактировать">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.333 2a2.667 2.667 0 0 1 3.777 3.777L5.11 15.777 1.333 16l.223-3.777L11.333 2z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="action-button delete" title="Удалить">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M6 4V2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2m2 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4h8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="action-button print" title="Печать">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="4" y="4" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <text x="8" y="11" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">P</text>
          </svg>
        </button>
      </div>
    ),
  }))

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1 className="orders-title">Заказы</h1>
        <div className="orders-actions">
          <button className="header-button">Счёт на оплату</button>
          <button className="header-button">УПД</button>
          <button className="header-button primary" onClick={() => navigate('/orders/create')}>
            Добавить заказ +
          </button>
        </div>
      </div>

      <div className="orders-filters-card">
        <div className="filters-grid">
          <DateRange label="Дата приёма" />
          <DateRange label="Дата отгрузки" />
          <div className="form-group">
            <label className="form-label">Раскроенность заказов</label>
            <select className="form-select">
              <option value="">Все</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Состояние заказов</label>
            <select className="form-select">
              <option value="">Все</option>
            </select>
          </div>
          <div className="form-checkbox-group">
            <input type="checkbox" className="form-checkbox" id="no-shipment" />
            <label className="form-checkbox-label" htmlFor="no-shipment">
              Без даты отгрузки
            </label>
          </div>
        </div>
      </div>

      <div className="kpi-cards">
        <div className="kpi-card kpi-card-blue">
          <div className="kpi-content">
            <div className="kpi-label">Всего товаров: 1469 шт</div>
          </div>
          <img src="/Icon 1.png" alt="Всего товаров" className="kpi-icon" />
        </div>
        <div className="kpi-card kpi-card-blue">
          <div className="kpi-content">
            <div className="kpi-label">Площадь всего: 2293.55 м2</div>
          </div>
          <img src="/icon 3.svg" alt="Площадь всего" className="kpi-icon" />
        </div>
        <div className="kpi-card kpi-card-orange">
          <div className="kpi-content">
            <div className="kpi-label">Сумма товаров: 6562561.04 руб.</div>
          </div>
          <img src="/icon 4.svg" alt="Сумма товаров" className="kpi-icon" />
        </div>
        <div className="kpi-card kpi-card-orange">
          <div className="kpi-content">
            <div className="kpi-label">Сумма раскладки: 193483.5 руб.</div>
          </div>
          <img src="/icon 5.svg" alt="Сумма раскладки" className="kpi-icon" />
        </div>
        <div className="kpi-card kpi-card-orange">
          <div className="kpi-content">
            <div className="kpi-label">Общая сумма: 1469 шт</div>
          </div>
          <img src="/icon 6.svg" alt="Общая сумма" className="kpi-icon" />
        </div>
      </div>

      <div className="orders-table-wrapper">
        <Table columns={columns} data={data} selectable={false} />
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

