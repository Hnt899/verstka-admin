import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './UPD.css'

export default function UPD() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: 'checkbox', label: '' },
    { key: 'number', label: '№', searchable: true },
    { key: 'updNumber', label: 'Номер УПД', searchable: true },
    { key: 'order', label: 'Заказ', searchable: true },
    { key: 'createdAt', label: 'Создано в', searchable: true },
    { key: 'client', label: 'Клиент', searchable: true },
    { key: 'costWithoutTax', label: 'Стоимость без налога всего' },
    { key: 'taxAmount', label: 'Сумма налога' },
    { key: 'costWithTax', label: 'Стоимость с налогом всего' },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 15 }, (_, i) => ({
    checkbox: <input type="checkbox" />,
    number: i + 1,
    updNumber: i + 1,
    order: i + 1,
    createdAt: '2025-06-02 11:28:26',
    client: 'ИП Попов Евгений Александрович',
    costWithoutTax: '2000',
    taxAmount: '0',
    costWithTax: '2000',
    actions: (
      <button
        className="view-button"
        onClick={() => navigate(`/upd/${i + 1}`)}
        title="Просмотр"
      >
        <img src="/eye.svg" alt="Просмотр" />
      </button>
    ),
  }))

  return (
    <div className="upd-page">
      <div className="upd-header">
        <h1 className="upd-title">УПД</h1>
        <div className="upd-actions">
          <button className="header-button secondary">Выбрать все</button>
          <button className="header-button secondary">PDF</button>
          <button className="header-button secondary">XML</button>
          <button
            className="header-button primary"
            onClick={() => navigate('/upd/templates')}
          >
            Изменить шаблоны
          </button>
        </div>
      </div>

      <div className="upd-table-wrapper">
        <Table columns={columns} data={data} selectable={false} />
      </div>

      <div className="upd-total">
        <span>ВСЕГО: сумма</span>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

