import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './Frames.css'

export default function Frames() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: 'number', label: '№' },
    { key: 'name', label: 'Наименование', searchable: true },
    { key: 'thickness', label: 'Толщина', searchable: true },
    { key: 'weight', label: 'Вес', searchable: true },
    { key: 'sieve', label: 'Сито (кг на 1 п.м)', searchable: true },
    { key: 'thiokol', label: 'Теокол (литр на 1 п.м)', searchable: true },
    { key: 'butyl', label: 'Бутил (кг на 1 п.м)', searchable: true },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 16 }, (_, i) => ({
    number: (currentPage - 1) * 16 + i + 1,
    name: '4M1-16-4M1',
    thickness: '2',
    weight: '0',
    sieve: '1',
    thiokol: '1',
    butyl: '1',
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
    <div className="frames-page">
      <div className="page-header">
        <h1 className="page-title">Рамки</h1>
        <button className="add-button" onClick={() => navigate('/frames/create')}>
          Добавить +
        </button>
      </div>
      <Table columns={columns} data={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

