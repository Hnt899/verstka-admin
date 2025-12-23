import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './Pyramids.css'

export default function Pyramids() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: 'number', label: '№' },
    { key: 'name', label: 'Наименование', searchable: true },
    { key: 'code', label: 'Символьный код', searchable: true },
    { key: 'length', label: 'Длина', searchable: true },
    { key: 'width', label: 'Ширина', searchable: true },
    { key: 'quantity', label: 'Количество', searchable: true },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 16 }, (_, i) => ({
    number: (currentPage - 1) * 16 + i + 1,
    name: 'Наименование',
    code: 'Код',
    length: '0',
    width: '1',
    quantity: '1',
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
    <div className="pyramids-page">
      <div className="page-header">
        <h1 className="page-title">Пирамиды</h1>
        <button className="add-button" onClick={() => navigate('/pyramids/create')}>
          Добавить +
        </button>
      </div>
      <Table columns={columns} data={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

