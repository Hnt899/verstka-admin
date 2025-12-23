import { useState } from 'react'
import Tabs from '../../components/Tabs/Tabs'
import '../../components/Form/Form.css'
import ClientInfoTab from './tabs/ClientInfoTab'
import LegalAddressTab from './tabs/LegalAddressTab'
import ConsigneeAddressTab from './tabs/ConsigneeAddressTab'
import ManagerInfoTab from './tabs/ManagerInfoTab'
import BankInfoTab from './tabs/BankInfoTab'
import BalancesTab from './tabs/BalancesTab'
import './CreateClient.css'

export default function CreateClient() {
  const [activeTab, setActiveTab] = useState('client-info')

  const tabs = [
    { id: 'client-info', label: 'Информация о клиенте' },
    { id: 'legal-address', label: 'Юридический адрес' },
    { id: 'consignee-address', label: 'Адрес грузополучателя' },
    { id: 'manager-info', label: 'Информация о руководителе' },
    { id: 'bank-info', label: 'Информация о банке и ЭДО' },
    { id: 'balances', label: 'Остатки' },
  ]

  return (
    <div className="create-client-page">
      <h1 className="create-client-title">Добавить клиента</h1>
      <div className="create-client-tabs-wrapper">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="create-client-content-wrapper">
        {activeTab === 'client-info' && <ClientInfoTab />}
        {activeTab === 'legal-address' && <LegalAddressTab />}
        {activeTab === 'consignee-address' && <ConsigneeAddressTab />}
        {activeTab === 'manager-info' && <ManagerInfoTab />}
        {activeTab === 'bank-info' && <BankInfoTab />}
        {activeTab === 'balances' && <BalancesTab />}
      </div>
    </div>
  )
}

