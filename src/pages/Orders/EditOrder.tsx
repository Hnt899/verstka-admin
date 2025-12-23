import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tabs from '../../components/Tabs/Tabs'
import OrderDetails from './OrderDetails'
import OrderProducts from './OrderProducts'
import ImportXlsxModal from './ImportXlsxModal'
import './EditOrder.css'

export default function EditOrder() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('details')
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const orderNumber = 459

  const tabs = [
    { id: 'details', label: 'Детальная информация' },
    { id: 'products', label: 'Товары в заказе' },
  ]

  return (
    <div className="edit-order-page">
      <div className="edit-order-header">
        <h1 className="edit-order-title">Редактирование заказа: {orderNumber}</h1>
      </div>
      <div className="edit-order-tabs-wrapper">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <button className="xlsx-button" onClick={() => setIsImportModalOpen(true)}>
          xlsx +
        </button>
      </div>
      <div className="edit-order-content">
        {activeTab === 'details' && <OrderDetails orderNumber={orderNumber} />}
        {activeTab === 'products' && <OrderProducts orderNumber={orderNumber} />}
      </div>
      <ImportXlsxModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />
    </div>
  )
}

