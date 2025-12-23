import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import Modal from '../../components/Modal/Modal'
import DateRange from '../../components/DateRange/DateRange'
import '../../components/Form/Form.css'
import './Clients.css'

export default function Clients() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const [isModalOpen, setIsModalOpen] = useState(false)

  const columns = [
    { key: 'number', label: '№' },
    { key: 'client', label: 'Клиент', searchable: true },
    { key: 'address', label: 'Адрес', searchable: true },
    { key: 'type0', label: 'Типа 0', searchable: true },
    { key: 'type1', label: 'Типа 1', searchable: true },
    { key: 'creditLine', label: 'Кредитная линия', searchable: true },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 16 }, (_, i) => ({
    number: (currentPage - 1) * 16 + i + 1,
    client: 'Наименование',
    address: 'Адрес',
    type0: '0',
    type1: '1',
    creditLine: '1',
    actions: (
      <div className="table-actions">
        <button
          className="action-button edit"
          onClick={() => navigate(`/clients/edit/${i + 1}`)}
          title="Редактировать"
        >
          <img src="/edit.svg" alt="Редактировать" />
        </button>
        <button className="action-button delete" title="Удалить">
          <img src="/delete.svg" alt="Удалить" />
        </button>
        <button className="action-button kk" onClick={() => setIsModalOpen(true)} title="КК">
          <img src="/kk.svg" alt="КК" />
        </button>
      </div>
    ),
  }))

  return (
    <div className="clients-page">
      <div className="clients-header">
        <h1 className="clients-title">Клиенты</h1>
        <button className="header-button primary" onClick={() => navigate('/clients/create')}>
          Добавить +
        </button>
      </div>

      <div className="clients-table-wrapper">
        <Table columns={columns} data={data} selectable={false} />
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Карточка клиента за период">
        <div className="client-card-modal">
          <div className="form-group">
            <label className="form-label">Период</label>
            <DateRange label="" />
          </div>
          <div className="form-group">
            <label className="form-label">Выберите договор</label>
            <select className="form-input">
              <option value="">Выбрать</option>
            </select>
          </div>
          <div className="form-radio-group">
            <label className="form-radio-label">
              <input type="radio" name="dateType" value="receipt" defaultChecked />
              <span>По дате приёма</span>
            </label>
            <label className="form-radio-label">
              <input type="radio" name="dateType" value="shipment" />
              <span>По дате отгрузки</span>
            </label>
          </div>
          <button className="form-button full-width" onClick={() => setIsModalOpen(false)}>
            Создать
          </button>
        </div>
      </Modal>
    </div>
  )
}

