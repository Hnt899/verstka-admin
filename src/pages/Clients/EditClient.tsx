import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Tabs from '../../components/Tabs/Tabs'
import Table from '../../components/Table/Table'
import Card from '../../components/Card/Card'
import ClientInfoTab from './tabs/ClientInfoTab'
import LegalAddressTab from './tabs/LegalAddressTab'
import ConsigneeAddressTab from './tabs/ConsigneeAddressTab'
import ManagerInfoTab from './tabs/ManagerInfoTab'
import BankInfoTab from './tabs/BankInfoTab'
import BalancesTab from './tabs/BalancesTab'
import './EditClient.css'

export default function EditClient() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [topActiveTab, setTopActiveTab] = useState('contracts')
  const [bottomActiveTab, setBottomActiveTab] = useState('client-info')

  const topTabs = [
    { id: 'contracts', label: 'Договоры' },
    { id: 'payments', label: 'Платежи' },
  ]

  const bottomTabs = [
    { id: 'client-info', label: 'Информация о клиенте' },
    { id: 'legal-address', label: 'Юридический адрес' },
    { id: 'consignee-address', label: 'Адрес грузополучателя' },
    { id: 'manager-info', label: 'Информация о руководителе' },
    { id: 'bank-info', label: 'Информация о банке и ЭДО' },
    { id: 'balances', label: 'Остатки' },
  ]

  const contractsColumns = [
    { key: 'number', label: '№' },
    { key: 'startDate', label: 'Дата начала' },
    { key: 'endDate', label: 'Дата окончания' },
    { key: 'name', label: 'Название договора' },
    { key: 'amount', label: 'Сумма' },
    { key: 'debt', label: 'Долг' },
    { key: 'actions', label: '' },
  ]

  const contractsData = Array.from({ length: 7 }, (_, i) => ({
    number: i + 1,
    startDate: 'Дата',
    endDate: 'Дата',
    name: 'Название',
    amount: 'Сумма',
    debt: 'Долг',
    actions: (
      <div className="table-actions">
        <button className="action-button edit" title="Редактировать">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.333 2a2.667 2.667 0 0 1 3.777 3.777L5.11 15.777 1.333 16l.223-3.777L11.333 2z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="action-button delete" title="Удалить">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M6 4V2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2m2 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4h8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="action-button w-button">W</button>
      </div>
    ),
  }))

  const paymentsColumns = [
    { key: 'number', label: '№' },
    { key: 'startDate', label: 'Дата начала', searchable: true },
    { key: 'docNumber', label: '№ документа', searchable: true },
    { key: 'amount', label: 'Сумма', searchable: true },
    { key: 'status', label: 'Статус', searchable: true },
    { key: 'contract', label: 'Договор', searchable: true },
    { key: 'comment', label: 'Комментарий', searchable: true },
    { key: 'relatedOrders', label: 'Относится к заказам', searchable: true },
    { key: 'actions', label: '' },
  ]

  const paymentsData = Array.from({ length: 8 }, (_, i) => ({
    number: i + 1,
    startDate: 'Дата',
    docNumber: 'Номер',
    amount: 'Сумма',
    status: 'Статус',
    contract: 'Договор',
    comment: 'Комментарий',
    relatedOrders: 'Номер заказа',
    actions: (
      <div className="table-actions">
        <button className="action-button edit" title="Редактировать">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.333 2a2.667 2.667 0 0 1 3.777 3.777L5.11 15.777 1.333 16l.223-3.777L11.333 2z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="action-button delete" title="Удалить">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M6 4V2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2m2 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4h8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    ),
  }))

  return (
    <div className="edit-client-page">
      <h1 className="edit-client-title">Редактировать карточку клиента: ИП Попов Евгений Александрович</h1>
      
      <div className="top-table-wrapper">
        <div className="edit-client-top-section">
          <Tabs tabs={topTabs} activeTab={topActiveTab} onTabChange={setTopActiveTab} />
          <div className="top-actions">
            {topActiveTab === 'contracts' && (
              <button className="add-button-link" onClick={() => {}}>
                Добавить договор <span className="add-button-plus">+</span>
              </button>
            )}
            {topActiveTab === 'payments' && (
              <button className="add-button-link" onClick={() => {}}>
                Добавить платеж <span className="add-button-plus">+</span>
              </button>
            )}
          </div>
        </div>
        <div className="top-table-content">
          {topActiveTab === 'contracts' && (
            <Table columns={contractsColumns} data={contractsData} selectable={false} />
          )}
          {topActiveTab === 'payments' && (
            <Table columns={paymentsColumns} data={paymentsData} selectable={false} />
          )}
        </div>
      </div>

      <div className="edit-client-bottom-tabs-wrapper">
        <Tabs tabs={bottomTabs} activeTab={bottomActiveTab} onTabChange={setBottomActiveTab} />
      </div>
      <div className="edit-client-bottom-content-wrapper">
        {bottomActiveTab === 'client-info' && <ClientInfoTab />}
        {bottomActiveTab === 'legal-address' && <LegalAddressTab />}
        {bottomActiveTab === 'consignee-address' && <ConsigneeAddressTab />}
        {bottomActiveTab === 'manager-info' && <ManagerInfoTab />}
        {bottomActiveTab === 'bank-info' && <BankInfoTab />}
        {bottomActiveTab === 'balances' && <BalancesTab />}
      </div>
    </div>
  )
}

