import Card from '../../components/Card/Card'
import FileUpload from '../../components/FileUpload/FileUpload'
import './Templates.css'

export default function Templates() {
  return (
    <div className="templates-page">
      <div className="templates-cards">
        <Card title="Шаблон XML">
          <div className="template-content">
            <FileUpload />
            <div className="template-actions">
              <button className="template-button secondary">Скачать текущий шаблон</button>
              <button className="template-button">Загрузить новый шаблон</button>
            </div>
          </div>
        </Card>

        <Card title="Шаблон PDF">
          <div className="template-content">
            <FileUpload />
            <div className="template-actions">
              <button className="template-button secondary">Скачать текущий шаблон</button>
              <button className="template-button">Загрузить новый шаблон</button>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Доступные переменные">
        <div className="variables-content">
          <div className="variables-column">
            <div className="variable-item">%НОМЕР_ЗАКАЗА%</div>
            <div className="variable-item">%НАИМЕНОВАНИЕ_ОРГАНИЗАЦИИ%</div>
            <div className="variable-item">%АДРЕС_ОРГАНИЗАЦИИ%</div>
            <div className="variable-item">%ИНН_ПРОДАВЦА%</div>
            <div className="variable-item">%ГРУЗООТПРАВИТЕЛЬ%</div>
            <div className="variable-item">%ГРУЗОПОЛУЧАТЕЛЬ%</div>
            <div className="variable-item">%ПРД% * %ДОКУМЕНТ_ОТГРУЗКИ%</div>
            <div className="variable-item">%ДАТА_ОТГРУЗКИ%</div>
            <div className="variable-item">%ПОКУПАТЕЛЬ%</div>
            <div className="variable-item">%АДРЕС_ПОКУПАТЕЛЯ%</div>
            <div className="variable-item">%ИНН_ПОКУПАТЕЛЯ%</div>
            <div className="variable-item">%НАЗВАНИЕ_ВАЛЮТЫ%</div>
            <div className="variable-item">%КОД_ВАЛЮТЫ%</div>
          </div>
          <div className="variables-column">
            <div className="variable-section-title">*Переменные товаров</div>
            <div className="variable-item">%НАИМЕНОВАНИЕ_ТОВАРА%</div>
            <div className="variable-item">%КОД_ТОВАРА%</div>
            <div className="variable-item">%ЕД_ИЗМ_КОД%</div>
            <div className="variable-item">%ЕД_ИЗМ_ЗНАЧЕНИЕ%</div>
            <div className="variable-item">%КОЛИЧЕСТВО%</div>
            <div className="variable-item">%ЦЕНА_ЗА_ЕД_ИЗМ%</div>
            <div className="variable-item">%СТОИМОСТЬ_ТОВАРОВ_БЕЗ_НДС_ВСЕГО%</div>
            <div className="variable-item">%НАЛОГОВАЯ_СТАВКА%</div>
            <div className="variable-item">%СУММА_НАЛОГА%</div>
            <div className="variable-item">%ОБЩАЯ_СТОИМОСТЬ%</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

