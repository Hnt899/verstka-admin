import Table from '../../components/Table/Table'
import '../../components/Table/Table.css'

export default function RulesTab() {
  const columns = [
    { key: 'name', label: 'Имя пользователя', searchable: true },
    { key: 'class', label: 'Класс' },
    { key: 'createdAt', label: 'Дата создания' },
    { key: 'updatedAt', label: 'Дата редактирования' },
    { key: 'actions', label: '' },
  ]

  const data = [
    {
      name: 'Имя',
      class: 'Класс',
      createdAt: '27 нояб. 2025 в 12:01',
      updatedAt: '27 нояб. 2025 в 12:01',
      actions: (
        <div className="table-actions">
          <button className="action-button edit" title="Редактировать">
            <img src="/edit.svg" alt="Редактировать" />
          </button>
          <button className="action-button delete" title="Удалить">
            <img src="/delete.svg" alt="Удалить" />
          </button>
        </div>
      ),
    },
  ]

  return <Table columns={columns} data={data} />
}

