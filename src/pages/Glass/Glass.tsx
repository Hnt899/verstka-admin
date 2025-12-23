import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './Glass.css'

export default function Glass() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: 'number', label: '№' },
    { key: 'name', label: 'Наименование', searchable: true },
    { key: 'thickness', label: 'Толщина', searchable: true },
    { key: 'weight', label: 'Вес', searchable: true },
    { key: 'waste', label: 'Ко-эф отхода', searchable: true },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 16 }, (_, i) => ({
    number: (currentPage - 1) * 16 + i + 1,
    name: '4M1-16-4M1',
    thickness: '2',
    weight: '0',
    waste: '1',
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
    <div className="glass-page">
      <div className="page-header">
        <h1 className="page-title">Стекла</h1>
        <button className="add-button" onClick={() => navigate('/glass/create')}>
          Добавить +
        </button>
      </div>
      <Table columns={columns} data={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

