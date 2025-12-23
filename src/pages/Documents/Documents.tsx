import Card from '../../components/Card/Card'
import DateRange from '../../components/DateRange/DateRange'
import '../../components/Form/Form.css'
import './Documents.css'

export default function Documents() {
  return (
    <div className="documents-page">
      <div className="documents-cards">
        <Card title="Сформировать УПД">
          <DateRange />
          <div className="form-group">
            <label className="form-label">Выбор клиента</label>
            <select className="form-input">
              <option value="">Все</option>
            </select>
          </div>
          <button className="form-button generate-button">Сформировать +</button>
        </Card>

        <Card title="Сформировать счёт на оплату услуг">
          <DateRange />
          <button className="form-button generate-button">Сформировать +</button>
        </Card>

        <Card title="Сформировать товарную накладную">
          <DateRange />
          <div className="form-group">
            <label className="form-label">По клиенту</label>
            <select className="form-input">
              <option value="">Все</option>
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
          <div className="form-checkbox-group">
            <input type="checkbox" className="form-checkbox" id="all-clients" />
            <label className="form-checkbox-label" htmlFor="all-clients">
              По всем клиентам
            </label>
          </div>
          <button className="form-button generate-button">Сформировать +</button>
        </Card>
      </div>
    </div>
  )
}

