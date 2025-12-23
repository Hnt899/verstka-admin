import { useState } from 'react'
import './FileUpload.css'

interface FileUploadProps {
  onFileSelect?: (file: File) => void
  onFileRemove?: () => void
  uploadedFile?: {
    name: string
    size: string
    progress?: number
  }
}

export default function FileUpload({ onFileSelect, onFileRemove, uploadedFile }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && onFileSelect) {
      onFileSelect(file)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && onFileSelect) {
      onFileSelect(file)
    }
  }

  if (uploadedFile) {
    return (
      <div className="file-upload-card">
        <div className="file-upload-icon">📄</div>
        <div className="file-upload-info">
          <div className="file-name">{uploadedFile.name}</div>
          <div className="file-size">{uploadedFile.size}</div>
          {uploadedFile.progress !== undefined && (
            <div className="file-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${uploadedFile.progress}%` }}
                />
              </div>
              <span className="progress-text">Загрузка {uploadedFile.progress}%</span>
            </div>
          )}
        </div>
        <button className="file-remove" onClick={onFileRemove}>
          🗑️
        </button>
      </div>
    )
  }

  return (
    <div
      className={`file-upload-zone ${isDragging ? 'dragging' : ''}`}
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onClick={() => document.getElementById('file-input')?.click()}
    >
      <input
        id="file-input"
        type="file"
        accept=".xlsx"
        onChange={handleFileInput}
        style={{ display: 'none' }}
      />
      <div className="upload-icon">☁️+</div>
      <div className="upload-text">
        Нажмите сюда для загрузки ваших файлов или перетащите их
      </div>
      <div className="upload-formats">
        Поддерживаемые форматы: xlsx (вес до ... мб)
      </div>
    </div>
  )
}

