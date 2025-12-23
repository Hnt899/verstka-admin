import Table from '../../components/Table/Table'
import './UPDProducts.css'

interface UPDProductsProps {
  id: string
}

export default function UPDProducts({ id }: UPDProductsProps) {
  const columns = [
    { key: 'number', label: '№' },
    { key: 'name', label: 'Наименование товара' },
    { key: 'quantity', label: 'Кол-во' },
    { key: 'unitPrice', label: 'Цена за единицу' },
    { key: 'costWithoutTax', label: 'Стоимость без налога - всего' },
    { key: 'taxRate', label: 'Налоговая ставка' },
    { key: 'taxAmount', label: 'Сумма налога' },
    { key: 'costWithTax', label: 'Стоимость с налогом всего' },
  ]

  const data = Array.from({ length: 15 }, (_, i) => ({
    number: i + 1,
    name: 'Наименование',
    quantity: 'Кол-во',
    unitPrice: 'Цена',
    costWithoutTax: 'Стоимость',
    taxRate: 'Ставка',
    taxAmount: 'Сумма',
    costWithTax: 'Стоимость',
  }))

  return (
    <div className="upd-products">
      <div className="upd-products-table-wrapper">
        <Table columns={columns} data={data} selectable={false} />
      </div>
      <div className="upd-products-total">
        <span>ВСЕГО: сумма</span>
      </div>
    </div>
  )
}

