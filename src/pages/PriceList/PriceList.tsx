import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './PriceList.css'

export default function PriceList() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: 'number', label: '№' },
    { key: 'formula', label: 'Формула стеклопакета', searchable: true },
    { key: 'pricePerM2', label: 'Цена за м2', searchable: true },
    { key: 'pricePerPiece', label: 'Цена за штуку', searchable: true },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 16 }, (_, i) => ({
    number: (currentPage - 1) * 16 + i + 1,
    formula: '4M1-16-4M1',
    pricePerM2: '1700',
    pricePerPiece: '300',
    actions: (
      <div className="table-actions">
        <button
          className="action-button edit"
          onClick={() => navigate(`/price/edit/${i + 1}`)}
          title="Редактировать"
        >
          <img src="/edit.svg" alt="Редактировать" />
        </button>
        <button className="action-button delete" title="Удалить">
          <img src="/delete.svg" alt="Удалить" />
        </button>
      </div>
    ),
  }))

  return (
    <div className="price-list-page">
      <div className="price-list-header">
        <h1 className="price-list-title">Прайс-лист</h1>
        <button className="header-button primary" onClick={() => navigate('/price/create')}>
          Добавить новый прайс-лист +
        </button>
      </div>

      <div className="price-list-table-wrapper">
        <Table columns={columns} data={data} selectable={false} />
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

