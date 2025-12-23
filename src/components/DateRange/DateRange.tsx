import './DateRange.css'

interface DateRangeProps {
  label?: string
}

export default function DateRange({ label = 'Дата' }: DateRangeProps) {
  return (
    <div className="date-range">
      {label && <label className="date-range-label">{label}</label>}
      <div className="date-range-inputs">
        <div className="date-input-wrapper">
          <input type="text" className="date-input" placeholder="Начало" />
          <img src="/Input icon.svg" alt="Calendar" className="date-icon" />
        </div>
        <div className="date-input-wrapper">
          <input type="text" className="date-input" placeholder="Конец" />
          <img src="/Input icon.svg" alt="Calendar" className="date-icon" />
        </div>
      </div>
    </div>
  )
}

