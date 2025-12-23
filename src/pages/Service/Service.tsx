import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './Service.css'

export default function Service() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: 'number', label: '№' },
    { key: 'name', label: 'Наименование сервиса', searchable: true },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 15 }, (_, i) => ({
    number: (currentPage - 1) * 15 + i + 1,
    name: 'Наименование',
    actions: (
      <div className="table-actions">
        <button className="action-button edit" title="Редактировать">
          <img src="/edit.svg" alt="Редактировать" />
        </button>
        <button className="action-button delete" title="Удалить">
          <img src="/delete.svg" alt="Удалить" />
        </button>
      </div>
    ),
  }))

  return (
    <div className="service-page">
      <div className="service-header">
        <h1 className="service-title">Сервис</h1>
        <button className="service-add-button" onClick={() => navigate('/service/create')}>
          Добавить сервис +
        </button>
      </div>
      <Table columns={columns} data={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

