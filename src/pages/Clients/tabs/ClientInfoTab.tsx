import { useNavigate } from 'react-router-dom'
import '../../../components/Form/Form.css'
import './ClientInfoTab.css'

export default function ClientInfoTab() {
  const navigate = useNavigate()

  return (
    <div className="client-info-tab">
      <div className="form-grid-3">
        <div className="form-group">
          <label className="form-label">Тип клиента</label>
          <select className="form-input">
            <option value="">Выбрать</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">КПП</label>
          <input type="text" className="form-input" placeholder="Введите КПП" />
        </div>
        <div className="form-group">
          <label className="form-label">День рождение</label>
          <input type="text" className="form-input" placeholder="Введите дату" />
        </div>
        <div className="form-group">
          <label className="form-label">Клиент</label>
          <input type="text" className="form-input" placeholder="Введите наименование организации" />
        </div>
        <div className="form-group">
          <label className="form-label">ИНН</label>
          <input type="text" className="form-input" placeholder="Введите ИНН" />
        </div>
        <div className="form-group">
          <label className="form-label">E-mail</label>
          <input type="email" className="form-input" placeholder="Введите e-mail" />
        </div>
        <div className="form-group">
          <label className="form-label">Фамилия</label>
          <input type="text" className="form-input" placeholder="Введите фамилию" />
        </div>
        <div className="form-group">
          <label className="form-label">Адрес доставки</label>
          <input type="text" className="form-input" placeholder="Введите адрес доставки" />
        </div>
        <div className="form-group">
          <label className="form-label">Имя для раскроев</label>
          <input type="text" className="form-input" placeholder="Введите имя" />
        </div>
        <div className="form-group">
          <label className="form-label">Имя</label>
          <input type="text" className="form-input" placeholder="Введите имя" />
        </div>
        <div className="form-group">
          <label className="form-label">Имя для этикеток</label>
          <input type="text" className="form-input" placeholder="Введите имя для этикеток" />
        </div>
        <div className="form-group">
          <label className="form-label">Кредитная линия</label>
          <input type="number" className="form-input" defaultValue="0" />
        </div>
        <div className="form-group">
          <label className="form-label">Отчество</label>
          <input type="text" className="form-input" placeholder="Введите отчество" />
        </div>
        <div className="form-group">
          <label className="form-label">Адрес для этикеток</label>
          <input type="text" className="form-input" placeholder="Введите адрес для этикеток" />
        </div>
        <div className="form-group">
          <label className="form-label">Коэффициент 0</label>
          <input type="number" className="form-input" defaultValue="0" />
        </div>
        <div className="form-group">
          <label className="form-label">ОКПО</label>
          <input type="text" className="form-input" placeholder="Введите ОКПО" />
        </div>
        <div className="form-group">
          <label className="form-label">Территориальная группа</label>
          <select className="form-input">
            <option value="">Выбрать</option>
          </select>
        </div>
      </div>
      <button className="form-button" onClick={() => navigate('/clients')}>
        Сохранить
      </button>
    </div>
  )
}

