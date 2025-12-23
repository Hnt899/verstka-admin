import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import DateRange from '../../components/DateRange/DateRange'
import '../../components/Form/Form.css'
import './Reports.css'

export default function Reports() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const reports = [
    'Доставка',
    'Реестр договоров',
    'Стёкла',
    'Задание в цех',
    'Услуги',
    'Акт сверки заказов типо 0',
    'Акт сверки заказов типа 1',
    'Материалы заказов типа 0',
    'Материалы заказов типа 1',
    'Объем производства вар -1',
    'Объем производства вар -2',
    'Реестр счетов-фактур',
    'Списание материалов',
  ]

  return (
    <div className="reports-page">
      <div className="reports-grid">
        {reports.map((report, index) => (
          <button
            key={index}
            className="report-tile"
            onClick={() => setIsModalOpen(true)}
          >
            <span>{report}</span>
            <span className="tile-icon">+</span>
          </button>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Заголовок"
      >
        <div className="modal-form">
          <DateRange />
          <div className="form-group">
            <label className="form-label">Выберите клиента</label>
            <select className="form-input">
              <option value="">Выбрать</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">По номеру заказа</label>
            <input
              type="text"
              className="form-input"
              placeholder="Введите номер"
            />
          </div>
          <button className="form-button generate-report-button">
            Сформировать отчёт
          </button>
        </div>
      </Modal>
    </div>
  )
}

