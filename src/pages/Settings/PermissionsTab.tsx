import Table from '../../components/Table/Table'
import '../../components/Table/Table.css'

export default function PermissionsTab() {
  const columns = [
    { key: 'name', label: 'Имя пользователя', searchable: true },
    { key: 'description', label: 'Описание', searchable: true },
    { key: 'ruleName', label: 'Название правила', searchable: true },
    { key: 'actions', label: '' },
  ]

  const data = [
    {
      name: 'user-management',
      description: 'User Management',
      ruleName: '(не задано)',
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

