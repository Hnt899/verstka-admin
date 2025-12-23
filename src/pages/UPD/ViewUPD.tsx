import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Tabs from '../../components/Tabs/Tabs'
import UPDDetails from './UPDDetails'
import UPDProducts from './UPDProducts'
import './ViewUPD.css'

export default function ViewUPD() {
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState('details')

  const tabs = [
    { id: 'details', label: 'Детальная информация' },
    { id: 'products', label: 'Товары в заказе' },
  ]

  return (
    <div className="view-upd-page">
      <h1 className="view-upd-title">УПД: {id}</h1>
      <div className="view-upd-tabs-wrapper">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="view-upd-content-wrapper">
        {activeTab === 'details' && <UPDDetails id={id || ''} />}
        {activeTab === 'products' && <UPDProducts id={id || ''} />}
      </div>
    </div>
  )
}

