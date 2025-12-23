import './UPDDetails.css'

interface UPDDetailsProps {
  id: string
}

export default function UPDDetails({ id }: UPDDetailsProps) {
  return (
    <div className="upd-details">
      <div className="details-grid">
        <div className="detail-item">
          <div className="detail-label">№</div>
          <div className="detail-value">{id}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Дата</div>
          <div className="detail-value">12.12.2025</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Заказ</div>
          <div className="detail-value">{id}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Дата заказа</div>
          <div className="detail-value">12.12.2025</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Клиент</div>
          <div className="detail-value">Евгений</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Статус</div>
          <div className="detail-value">1</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Грузополучатель</div>
          <div className="detail-value">Евгений</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Адрес грузополучателя</div>
          <div className="detail-value">Фунтовское шоссе, 2</div>
        </div>
      </div>
    </div>
  )
}

