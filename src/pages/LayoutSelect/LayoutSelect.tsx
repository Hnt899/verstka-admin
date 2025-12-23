import { useState } from 'react'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import Card from '../../components/Card/Card'
import './LayoutSelect.css'

export default function LayoutSelect() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null)

  const columns = [
    { key: 'number', label: '№' },
    { key: 'name', label: 'Наименование', searchable: true },
    { key: 'action', label: '' },
  ]

  const data = Array.from({ length: 5 }, (_, i) => ({
    number: (currentPage - 1) * 5 + i + 1,
    name: 'Раскладка',
    action: (
      <button
        className="select-button"
        onClick={() => setSelectedLayout(`layout-${i + 1}`)}
      >
        Выбрать
      </button>
    ),
  }))

  return (
    <div className="layout-select-page">
      <h1 className="layout-select-title">Расклад</h1>
      <div className="layout-table-wrapper">
        <Table columns={columns} data={data} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>

      {selectedLayout && (
        <Card title="">
          <div className="task-header">
            <h3 className="task-title">Задание №1</h3>
            <button className="task-close" onClick={() => setSelectedLayout(null)}>
              ✕
            </button>
          </div>
          <div className="task-content">
            <div className="task-table-wrapper">
              <table className="task-table">
                <thead>
                  <tr>
                    <th>Раскладка</th>
                    <th>Деталь раскладки</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Раскладка</td>
                    <td>Детали</td>
                    <td>Цена</td>
                    <td>Кол-во</td>
                    <td>Сумма</td>
                    <td>
                      <button className="delete-row-button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 4h12M6 4V2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2m2 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4h8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="summary-table-wrapper">
              <table className="summary-table">
                <tbody>
                  <tr>
                    <td>Сумма</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Сумма за отходы</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Сумма за работу</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Общая сумма</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

