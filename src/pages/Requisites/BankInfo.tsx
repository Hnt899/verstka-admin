import '../../components/Form/Form.css'

export default function BankInfo() {
  return (
    <div className="form">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Название банка</label>
          <input
            type="text"
            className="form-input"
            defaultValue="АСТРАХАНСКОЕ ОТДЕЛЕНИЕ №8625 ПАО СБЕРБАНК"
          />
        </div>
        <div className="form-group">
          <label className="form-label">к/с</label>
          <input
            type="text"
            className="form-input"
            defaultValue="30101810500000000602"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Город банка</label>
          <input
            type="text"
            className="form-input"
            defaultValue="г. Астрахань"
          />
        </div>
        <div className="form-group">
          <label className="form-label">р/с</label>
          <input
            type="text"
            className="form-input"
            defaultValue="40802810205000021616"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">БИК</label>
          <input
            type="text"
            className="form-input"
            defaultValue="041203602"
          />
        </div>
        <div className="form-group"></div>
      </div>

      <button className="form-button">Сохранить</button>
    </div>
  )
}

