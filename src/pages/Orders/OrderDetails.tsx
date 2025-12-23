import { useNavigate } from 'react-router-dom'
import DateRange from '../../components/DateRange/DateRange'
import '../../components/Form/Form.css'
import './OrderDetails.css'

interface OrderDetailsProps {
  orderNumber: number
}

export default function OrderDetails({ orderNumber }: OrderDetailsProps) {
  const navigate = useNavigate()

  return (
    <div className="order-details">
      <div className="form">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label className="form-label">№</label>
              <input
                type="text"
                className="form-input"
                defaultValue={orderNumber.toString()}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Счет</label>
              <input
                type="text"
                className="form-input"
                defaultValue={orderNumber.toString()}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Клиент</label>
              <select className="form-input">
                <option value="">Выбрать</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Договор</label>
              <select className="form-input">
                <option value="">Выбрать</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Территориальная группа</label>
              <select className="form-input">
                <option value="">Выбрать</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Доставка</label>
              <textarea
                className="form-input"
                rows={3}
                placeholder="Укажите доставку"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Комментарий</label>
              <textarea
                className="form-input"
                rows={3}
                placeholder="Укажите комментарий"
              />
            </div>
            <button className="form-button" onClick={() => navigate('/orders')}>
              Сохранить
            </button>
          </div>

          <div className="form-column">
            <DateRange label="Дата приёма" />
            <DateRange label="Дата отгрузки" />
            <div className="form-group">
              <label className="form-label">Статус</label>
              <select className="form-input">
                <option value="">Выбрать</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Коэффициент</label>
              <input
                type="text"
                className="form-input"
                placeholder="Введите коэффициент"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Валюта</label>
              <select className="form-input">
                <option value="">Выбрать</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Итого</label>
              <input
                type="text"
                className="form-input"
                placeholder="Итоговая сумма"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Состояние заказа</label>
              <select className="form-input">
                <option value="">Выбрать статус</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

