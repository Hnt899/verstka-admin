import { useNavigate } from 'react-router-dom'
import '../../../components/Form/Form.css'
import './AddressTab.css'

export default function ConsigneeAddressTab() {
  const navigate = useNavigate()

  return (
    <div className="address-tab">
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Индекс</label>
          <input type="text" className="form-input" placeholder="Введите индекс" />
        </div>
        <div className="form-group">
          <label className="form-label">Район</label>
          <input type="text" className="form-input" placeholder="Введите район" />
        </div>
        <div className="form-group">
          <label className="form-label">Код региона</label>
          <input type="text" className="form-input" placeholder="Введите код региона" />
        </div>
        <div className="form-group">
          <label className="form-label">Улица</label>
          <input type="text" className="form-input" placeholder="Введите улицу" />
        </div>
        <div className="form-group">
          <label className="form-label">Наименование региона</label>
          <input type="text" className="form-input" placeholder="Введите наименование региона" />
        </div>
        <div className="form-group">
          <label className="form-label">Дом</label>
          <input type="text" className="form-input" placeholder="Введите дом" />
        </div>
        <div className="form-group">
          <label className="form-label">Город</label>
          <input type="text" className="form-input" placeholder="Введите город" />
        </div>
        <div className="form-group">
          <label className="form-label">Корпус</label>
          <input type="text" className="form-input" placeholder="Введите корпус" />
        </div>
        <div className="form-group">
          <label className="form-label">Населенный пункт</label>
          <input type="text" className="form-input" placeholder="Введите населенный пункт" />
        </div>
        <div className="form-group">
          <label className="form-label">Квартира</label>
          <input type="text" className="form-input" placeholder="Введите квартиру" />
        </div>
      </div>
      <button className="form-button" onClick={() => navigate('/clients')}>
        Сохранить
      </button>
    </div>
  )
}

