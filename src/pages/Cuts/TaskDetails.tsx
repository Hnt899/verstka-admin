import Table from '../../components/Table/Table'
import './TaskDetails.css'

interface TaskDetailsProps {
  taskId: number
  onClose: () => void
}

export default function TaskDetails({ taskId, onClose }: TaskDetailsProps) {
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

  const glassColumns = [
    { key: 'number', label: '№' },
    { key: 'glass', label: 'Стекло' },
    { key: 'width', label: 'Ширина' },
    { key: 'height', label: 'Высота' },
    { key: 'cell', label: 'Ячейка' },
    { key: 'orderNumber', label: 'Подряд №' },
  ]

  const glassData = Array.from({ length: 11 }, (_, i) => ({
    number: '1',
    glass: '4MF (BR)',
    width: '2000',
    height: '1500',
    cell: '1',
    orderNumber: '1',
  }))

  return (
    <div className="task-details">
      <div className="task-details-header">
        <h3 className="task-details-title">Задание №{taskId}</h3>
        <button className="task-details-close" onClick={onClose} title="Закрыть">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="task-details-content">
        <div className="task-details-section">
          <Table columns={ordersColumns} data={ordersData} selectable={false} />
        </div>
        
        <div className="task-details-section">
          <Table columns={glassColumns} data={glassData} selectable={false} />
        </div>
      </div>
    </div>
  )
}

