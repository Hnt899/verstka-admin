import '../../components/Form/Form.css'

export default function CompanyAddresses() {
  return (
    <div className="form">
      <div className="form-two-column">
        <div className="form-section">
          <h3 className="form-section-title">Фактический адрес</h3>
          <div className="form-group">
            <label className="form-label">Индекс</label>
            <input type="text" className="form-input" defaultValue="414004" />
          </div>
          <div className="form-group">
            <label className="form-label">Код региона</label>
            <input type="text" className="form-input" defaultValue="30" />
          </div>
          <div className="form-group">
            <label className="form-label">Наименование региона</label>
            <input
              type="text"
              className="form-input"
              defaultValue="Астраханская обл"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Город</label>
            <input type="text" className="form-input" defaultValue="Астрахань" />
          </div>
          <div className="form-group">
            <label className="form-label">Улица</label>
            <input
              type="text"
              className="form-input"
              defaultValue="С. Перовской"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Дом</label>
              <input type="text" className="form-input" defaultValue="3" />
            </div>
            <div className="form-group">
              <label className="form-label">Строение</label>
              <input
                type="text"
                className="form-input"
                defaultValue='111"И"'
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-section-title">Юридический адрес</h3>
          <div className="form-group">
            <label className="form-label">Индекс</label>
            <input type="text" className="form-input" defaultValue="414004" />
          </div>
          <div className="form-group">
            <label className="form-label">Код региона</label>
            <input type="text" className="form-input" defaultValue="30" />
          </div>
          <div className="form-group">
            <label className="form-label">Наименование региона</label>
            <input
              type="text"
              className="form-input"
              defaultValue="Астраханская обл"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Город</label>
            <input type="text" className="form-input" defaultValue="Астрахань" />
          </div>
          <div className="form-group">
            <label className="form-label">Улица</label>
            <input
              type="text"
              className="form-input"
              defaultValue="С. Перовской"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Дом</label>
              <input type="text" className="form-input" defaultValue="3" />
            </div>
            <div className="form-group">
              <label className="form-label">Строение</label>
              <input
                type="text"
                className="form-input"
                defaultValue='111"И"'
              />
            </div>
          </div>
        </div>
      </div>

      <button className="form-button">Сохранить</button>
    </div>
  )
}

