import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()
  
  const columns = [
    { key: 'number', label: '№', sortable: true },
    { key: 'upd', label: 'УПД', searchable: true },
    { key: 'payment', label: 'Оплата' },
    { key: 'client', label: 'Клиент', searchable: true },
    { key: 'comment', label: 'Комментарий', searchable: true },
    { key: 'delivery', label: 'Доставка', searchable: true },
    { key: 'date', label: 'Дата приёма', searchable: true },
  ]

  const data = Array.from({ length: 16 }, (_, i) => ({
    number: i + 1,
    upd: 'Отсутствует',
    payment: i === 1 ? 'Нет' : 'Да',
    paymentStatus: i === 1 ? 'no' : 'yes',
    client: 'ИП Попова Е. А.',
    comment: 'Нужно расчитать стоимость и перезвонить клиенту',
    delivery: 'В цех',
    date: '12.12.2025',
  }))

  const reports = [
    'Доставка',
    'Реестр договоров',
    'Стёкла',
    'Задание в цех',
    'Услуги',
    'Акт сверки заказов типо 0',
    'Акт сверки заказов типа 1',
    'Материалы заказов типа 0',
    'Материалы заказов типа 1',
    'Объем производства вар -1',
    'Объем производства вар -2',
    'Реестр счетов-фактур',
    'Списание материалов',
  ]

  return (
    <div className="home-page">
      <div className="home-directories">
        <h2 className="home-directories-title">Справочники</h2>
        <div className="home-directories-buttons">
          <div className="directory-button" onClick={() => navigate('/orders')}>
            <img src="/Notebook blue dashboard.svg" alt="Заказы" className="directory-icon" />
            <span>Заказы</span>
          </div>
          <div className="directory-button" onClick={() => navigate('/cuts')}>
            <img src="/Notebook blue dashboard.svg" alt="Раскрои" className="directory-icon" />
            <span>Раскрои</span>
          </div>
          <div className="directory-button" onClick={() => navigate('/upd')}>
            <img src="/Notebook blue dashboard.svg" alt="УПД" className="directory-icon" />
            <span>УПД</span>
          </div>
          <div className="directory-button" onClick={() => navigate('/price')}>
            <img src="/Notebook blue dashboard.svg" alt="Прайс" className="directory-icon" />
            <span>Прайс</span>
          </div>
          <div className="directory-button" onClick={() => navigate('/clients')}>
            <img src="/Notebook blue dashboard.svg" alt="Клиенты" className="directory-icon" />
            <span>Клиенты</span>
          </div>
        </div>
      </div>

      <div className="home-content">
        <div className="home-main">
          <div className="home-section-header">
            <h2 className="home-section-title">Последние заказы</h2>
            <div className="home-section-actions">
              <a href="#" className="home-link">Смотреть все</a>
              <a href="#" className="home-link">Добавить заказ +</a>
            </div>
          </div>
          <Table columns={columns} data={data} selectable />
          <div className="home-pagination">
            <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
          </div>
        </div>

        <div className="home-reports-wrapper">
          <div className="home-reports">
            <h2 className="home-section-title">Отчеты</h2>
            <div className="reports-list">
              {reports.map((report, index) => (
                <div key={index} className="report-item">
                  <span>{report}</span>
                  <span className="report-icon">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

