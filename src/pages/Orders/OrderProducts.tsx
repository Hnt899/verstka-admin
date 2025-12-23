import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import Drawer from '../../components/Drawer/Drawer'
import Modal from '../../components/Modal/Modal'
import FileUpload from '../../components/FileUpload/FileUpload'
import AddProductDrawer from './AddProductDrawer'
import ReplaceFormulaModal from './ReplaceFormulaModal'
import ImportXlsxModal from './ImportXlsxModal'
import './OrderProducts.css'

interface OrderProductsProps {
  orderNumber: number
}

export default function OrderProducts({ orderNumber }: OrderProductsProps) {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const [hasProducts, setHasProducts] = useState(true)
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false)
  const [isReplaceModalOpen, setIsReplaceModalOpen] = useState(false)
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)

  const columns = [
    { key: 'checkbox', label: '' },
    { key: 'number', label: '№' },
    { key: 'formula', label: 'Формула' },
    { key: 'width', label: 'Ширина, ММ' },
    { key: 'height', label: 'Высота, ММ' },
    { key: 'price', label: 'Цена, Р' },
    { key: 'area', label: 'Площадь, м2' },
    { key: 'quantity', label: 'Кол-во' },
    { key: 'product', label: 'Изделие' },
    { key: 'layout', label: 'Расклад' },
    { key: 'unitPrice', label: 'Цена за единицу, Р' },
    { key: 'costWithoutTax', label: 'Стоимость товаров без налога-всего, Р' },
    { key: 'taxRate', label: 'Налоговая ставка' },
    { key: 'taxAmount', label: 'Сумма налога' },
    { key: 'total', label: 'Итого' },
    { key: 'noWarranty', label: 'Без гарантии' },
    { key: 'comment', label: 'Комментарий' },
    { key: 'actions', label: '' },
  ]

  const data = Array.from({ length: 14 }, (_, i) => ({
    checkbox: <input type="checkbox" />,
    number: i + 1,
    formula: 'Формула',
    width: 'Ширина',
    height: 'Высота',
    price: 'Цена',
    area: 'Площадь',
    quantity: 'Кол-во',
    product: 'Изделие',
    layout: 'Расклад',
    unitPrice: 'Цена',
    costWithoutTax: 'Стоимость',
    taxRate: 'Ставка',
    taxAmount: 'Сумма',
    total: 'Итого',
    noWarranty: 'Да / Нет',
    comment: 'Комментарий',
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
        <button className="action-button print" title="Печать">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="4" y="4" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <text x="8" y="11" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">P</text>
          </svg>
        </button>
      </div>
    ),
  }))

  if (!hasProducts) {
    return (
      <div className="order-products">
        <div className="products-header">
          <h2 className="products-title">Товары</h2>
          <div className="products-actions">
            <button className="action-link" onClick={() => setIsReplaceModalOpen(true)}>
              Заменить формулу
            </button>
            <button className="action-link" onClick={() => setIsAddDrawerOpen(true)}>
              Добавить товар +
            </button>
          </div>
        </div>
        <div className="empty-state">
          <div className="empty-icon">🛒✓</div>
          <div className="empty-text">Здесь будут отображаться товары в заказе</div>
        </div>
        <button className="form-button save-button" onClick={() => navigate('/orders')}>
          Сохранить
        </button>

        <AddProductDrawer
          isOpen={isAddDrawerOpen}
          onClose={() => setIsAddDrawerOpen(false)}
        />
        <ReplaceFormulaModal
          isOpen={isReplaceModalOpen}
          onClose={() => setIsReplaceModalOpen(false)}
        />
        <ImportXlsxModal
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
        />
      </div>
    )
  }

  return (
    <div className="order-products">
      <div className="products-header">
        <h2 className="products-title">Товары</h2>
        <div className="products-actions">
          <button className="action-link" onClick={() => setIsReplaceModalOpen(true)}>
            Заменить формулу
          </button>
          <button className="action-link" onClick={() => setIsAddDrawerOpen(true)}>
            Добавить товар +
          </button>
          <button className="action-link" onClick={() => {}}>
            Выбрать все
          </button>
        </div>
      </div>

      <div className="products-table-wrapper">
        <Table columns={columns} data={data} selectable={false} />
      </div>

      <div className="products-total">
        <span>ВСЕГО: сумма</span>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      <button className="form-button save-button" onClick={() => navigate('/orders')}>
        Сохранить
      </button>

      <AddProductDrawer
        isOpen={isAddDrawerOpen}
        onClose={() => setIsAddDrawerOpen(false)}
      />
      <ReplaceFormulaModal
        isOpen={isReplaceModalOpen}
        onClose={() => setIsReplaceModalOpen(false)}
      />
      <ImportXlsxModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />
    </div>
  )
}

