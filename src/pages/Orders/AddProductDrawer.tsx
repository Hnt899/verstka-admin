import Drawer from '../../components/Drawer/Drawer'
import '../../components/Form/Form.css'
import './AddProductDrawer.css'

interface AddProductDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddProductDrawer({ isOpen, onClose }: AddProductDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Добавить товар в заказ">
      <div className="add-product-form">
        <div className="form-group">
          <label className="form-label">Выберите формулу</label>
          <select className="form-input">
            <option value="">Выбрать</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Ширина, ММ</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите ширину"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Высота, ММ</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите высоту"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Количество</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите количесвто"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Площадь, м2</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите площадь"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Цена, Р</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите высоту"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Сумма</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите сумму"
          />
        </div>
        <div className="form-checkbox-group">
          <input type="checkbox" className="form-checkbox" id="no-warranty" />
          <label className="form-checkbox-label" htmlFor="no-warranty">
            Без гарантии
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">Комментарий</label>
          <textarea
            className="form-input"
            rows={4}
            placeholder="Введите комментарий"
          />
        </div>
        <button className="form-button" onClick={onClose}>
          Добавить товар
        </button>
      </div>
    </Drawer>
  )
}

