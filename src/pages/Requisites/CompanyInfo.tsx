import '../../components/Form/Form.css'

export default function CompanyInfo() {
  return (
    <div className="form">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Полное наименование организации</label>
          <input
            type="text"
            className="form-input"
            defaultValue="ИП Спешилова Татьяна Николаевна"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Руководитель</label>
          <input
            type="text"
            className="form-input"
            defaultValue="Спешилова Татьяна Николаевна"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Короткое наименование организации</label>
          <input
            type="text"
            className="form-input"
            defaultValue="ИП Спешилова Т.Н."
          />
        </div>
        <div className="form-group">
          <label className="form-label">Главный бухгалтер</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите имя бухгалтера"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Адрес организации</label>
          <input
            type="text"
            className="form-input"
            defaultValue='414004, Россия, г. Астрахань, ул. С. Перовской, 111"И"'
          />
        </div>
        <div className="form-group">
          <label className="form-label">Уполномоченное лицо</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите имя уполномоченного лица"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">ИНН</label>
          <input
            type="text"
            className="form-input"
            defaultValue="301506534007"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Доверенность №</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите номер"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">КПП</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите КПП"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Дата подписания</label>
          <input
            type="text"
            className="form-input"
            defaultValue="01.01.1970"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">ОКПО</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите ОКПО"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Телефоны</label>
          <input
            type="text"
            className="form-input"
            defaultValue="+7 (908) 615-08-20"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <div className="form-checkbox-group">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            <label className="form-checkbox-label">НДС</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            defaultValue="yco_zakaz@mail.ru"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <div className="form-checkbox-group">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            <label className="form-checkbox-label">Ставка НДС 22%</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Идентификатор участника ЭДО</label>
          <input
            type="text"
            className="form-input"
            defaultValue="32afc503bcb14fd882f4206fbc508095"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Код оператора ЭДО организации</label>
          <input
            type="text"
            className="form-input"
            defaultValue="2BE"
          />
        </div>
        <div className="form-group"></div>
      </div>

      <button className="form-button">Сохранить</button>
    </div>
  )
}

