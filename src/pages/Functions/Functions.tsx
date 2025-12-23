import './Functions.css'

export default function Functions() {
  const functions = [
    'Экспорт данных по счетам-фактурам в DBF',
    'Экспорт данных по отгрузке в DBF',
    'Экспорт данных по ВСЕМ заказам + материалы + изделия',
    'Экспорт СФ за период в xml',
  ]

  return (
    <div className="functions-container">
      <h1 className="functions-title">Функции</h1>
      <div className="functions-page">
        <div className="functions-list">
          {functions.map((func, index) => (
            <div key={index} className="function-item">
              <span>{func}</span>
              <span className="function-icon">+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

