import './Table.css'

interface Column {
  key: string
  label: string
  sortable?: boolean
  searchable?: boolean
}

interface TableProps {
  columns: Column[]
  data: Record<string, any>[]
  selectable?: boolean
}

export default function Table({ columns, data, selectable = false }: TableProps) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {selectable && (
              <th className="table-checkbox">
                <input type="checkbox" />
              </th>
            )}
            {columns.map((column) => (
              <th key={column.key} className={column.key === 'payment' ? 'payment-header' : ''}>
                <div className="table-header-content">
                  <span>{column.label}</span>
                  {column.sortable && <span className="table-sort-icon">↕</span>}
                  {column.searchable && (
                    <img src="/lupa.svg" alt="Поиск" className="table-search-icon" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {selectable && !columns.find(c => c.key === 'checkbox') && (
                <td className="table-checkbox">
                  <input type="checkbox" />
                </td>
              )}
              {columns.map((column) => {
                const value = row[column.key]
                if (column.key === 'checkbox') {
                  return <td key={column.key} className="table-checkbox">{value}</td>
                }
                if (column.key === 'payment') {
                  const isPaid = row.paymentStatus === 'yes' || value === 'Да'
                  return (
                    <td key={column.key} className={`payment-cell ${isPaid ? 'paid' : 'unpaid'}`}>
                      {value}
                    </td>
                  )
                }
                if (column.key === 'total') {
                  return <td key={column.key} className="table-total-cell">{value}</td>
                }
                if (column.key === 'state' || column.key === 'client') {
                  return <td key={column.key} className="table-nowrap-cell">{value}</td>
                }
                return <td key={column.key}>{value}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

