import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import DateRange from '../../components/DateRange/DateRange'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import TaskDetails from './TaskDetails'
import '../../components/Form/Form.css'
import './Cuts.css'

export default function Cuts() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

  const columns = [
    { key: 'number', label: '№' },
    { key: 'taskNumber', label: 'Задание №', searchable: true },
    { key: 'date', label: 'Дата раскроя' },
    { key: 'pcs', label: 'шт.' },
    { key: 'm2', label: 'м2' },
    { key: 'comment', label: 'Комментарий', searchable: true },
    { key: 'actions', label: '' },
  ]

  const handleStickerClick = (taskNumber: string) => {
    const taskId = parseInt(taskNumber)
    if (selectedTaskId === taskId) {
      setSelectedTaskId(null)
    } else {
      setSelectedTaskId(taskId)
    }
  }

  const data = Array.from({ length: 14 }, (_, i) => {
    const rowNumber = (currentPage - 1) * 14 + i + 1
    const taskNumber = '1'
    return {
      number: rowNumber,
      taskNumber: taskNumber,
      date: '06.09.2024',
      pcs: '70',
      m2: '127',
      comment: 'Тестовый раской после всех переделок',
      actions: (
        <div className="cuts-actions">
          <button className="action-button edit" title="Редактировать">
            <img src="/edit.svg" alt="Редактировать" />
          </button>
          <button className="action-button delete" title="Удалить">
            <img src="/delete.svg" alt="Удалить" />
          </button>
          {!selectedTaskId && (
            <>
              <button className="action-button-plate action-button-blue" onClick={() => {}}>
                <img src="/sz.svg" alt="СЗ" />
              </button>
              <button className="action-button-plate action-button-blue" onClick={() => {}}>
                <img src="/zc.svg" alt="ЗЦ" />
              </button>
              <button 
                className={`action-button-plate action-button-light ${selectedTaskId === parseInt(taskNumber) ? 'active' : ''}`} 
                onClick={() => handleStickerClick(taskNumber)}
              >
                <img src="/sticker.svg" alt="Стикер" />
              </button>
              <button className="action-button-plate action-button-light" onClick={() => {}}>
                <img src="/opty-way.svg" alt="В Opty Way" />
              </button>
            </>
          )}
        </div>
      ),
    }
  })

  return (
    <div className="cuts-page">
      <div className="cuts-header">
        <h1 className="cuts-title">Раскрои</h1>
        <button className="header-button primary" onClick={() => navigate('/cuts/create')}>
          Добавить раскрой +
        </button>
      </div>

      <Card title="">
        <div className="cuts-filter">
          <DateRange label="Период" />
        </div>
      </Card>

      <div className={`cuts-workspace ${selectedTaskId ? 'split-view' : ''}`}>
        <div className="cuts-table-container">
          <div className="cuts-table-wrapper">
            <Table columns={columns} data={data} selectable={false} />
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
        {selectedTaskId && (
          <div className="cuts-details-container">
            <TaskDetails taskId={selectedTaskId} onClose={() => setSelectedTaskId(null)} />
          </div>
        )}
      </div>
    </div>
  )
}

