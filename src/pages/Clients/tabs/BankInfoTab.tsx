import '../../../components/Form/Form.css'
import './BankInfoTab.css'

export default function BankInfoTab() {
  return (
    <div className="bank-info-tab">
      <div className="form-grid-3">
        <div className="form-group">
          <label className="form-label">Наименование банка</label>
          <input type="text" className="form-input" placeholder="Введите наименование банка" />
        </div>
        <div className="form-group">
          <label className="form-label">Регион банка</label>
          <input type="text" className="form-input" placeholder="Введите регион" />
        </div>
        <div className="form-group">
          <label className="form-label">Коэффициент</label>
          <input type="number" className="form-input" defaultValue="1" />
        </div>
        <div className="form-group">
          <label className="form-label">Расчетный счет</label>
          <input type="text" className="form-input" placeholder="Введите расчетный счет" />
        </div>
        <div className="form-group">
          <label className="form-label">Город банка</label>
          <input type="text" className="form-input" placeholder="Введите город" />
        </div>
        <div className="form-group">
          <label className="form-label">Комментарий</label>
          <textarea className="form-input" rows={4} placeholder="Введите комментарий" />
        </div>
        <div className="form-group">
          <label className="form-label">Корреспондентский счет</label>
          <input type="text" className="form-input" placeholder="Введите корреспондентский счет" />
        </div>
        <div className="form-group">
          <label className="form-label">Код оператора ЭДО</label>
          <input type="text" className="form-input" placeholder="Введите код" />
        </div>
        <div className="form-group">
          <label className="form-label">БИК</label>
          <input type="text" className="form-input" placeholder="Введите БИК" />
        </div>
        <div className="form-group">
          <label className="form-label">Идентификатор участника ЭДО</label>
          <input type="text" className="form-input" placeholder="Введите идентификатор" />
        </div>
        <div className="form-group full-width">
          <label className="form-label">Доверенность</label>
          <input type="text" className="form-input" placeholder="Введите доверенность" />
        </div>
        <div className="form-group date-group">
          <label className="form-label">Дата</label>
          <input type="text" className="form-input" placeholder="От" />
        </div>
        <div className="form-group full-width">
          <label className="form-label">№ договора</label>
          <input type="text" className="form-input" placeholder="Введите номер договора" />
        </div>
        <div className="form-group date-group">
          <label className="form-label">Дата</label>
          <input type="text" className="form-input" placeholder="От" />
        </div>
      </div>
      <button className="form-button" onClick={() => navigate('/clients')}>
        Сохранить
      </button>
    </div>
  )
}

