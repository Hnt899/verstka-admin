import { useState } from 'react'
import Tabs from '../../components/Tabs/Tabs'
import CompanyInfo from './CompanyInfo'
import CompanyAddresses from './CompanyAddresses'
import BankInfo from './BankInfo'
import './Requisites.css'

export default function Requisites() {
  const [activeTab, setActiveTab] = useState('company')

  const tabs = [
    { id: 'company', label: 'Информация о компании' },
    { id: 'addresses', label: 'Адреса компании' },
    { id: 'bank', label: 'Информация о банке' },
  ]

  return (
    <div className="requisites-page">
      <div className="requisites-tabs-wrapper">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="requisites-content">
        {activeTab === 'company' && <CompanyInfo />}
        {activeTab === 'addresses' && <CompanyAddresses />}
        {activeTab === 'bank' && <BankInfo />}
      </div>
    </div>
  )
}

