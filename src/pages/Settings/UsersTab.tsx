import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import { useState } from 'react'

export default function UsersTab() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: 'username', label: 'Имя пользователя', searchable: true },
    { key: 'email', label: 'E-mail', searchable: true },
    { key: 'ipRegistration', label: 'IP при регистрации', searchable: true },
    { key: 'registrationTime', label: 'Время регистрации', searchable: true },
    { key: 'lastLoginTime', label: 'Время последнего захода', searchable: true },
    { key: 'lastLoginIp', label: 'IP последнего зах', searchable: true },
  ]

  const data = Array.from({ length: 14 }, () => ({
    username: 'Имя',
    email: 'example@gmail.com',
    ipRegistration: 'IP',
    registrationTime: '10 нояб. 2023 в 14:19',
    lastLoginTime: '27 нояб. 2025 в 12:01',
    lastLoginIp: '77.222.96.150',
  }))

  return (
    <div>
      <Table columns={columns} data={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

