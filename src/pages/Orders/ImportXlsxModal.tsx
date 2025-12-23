import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import FileUpload from '../../components/FileUpload/FileUpload'
import '../../components/Form/Form.css'
import './ImportXlsxModal.css'

interface ImportXlsxModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ImportXlsxModal({ isOpen, onClose }: ImportXlsxModalProps) {
  const [uploadedFile, setUploadedFile] = useState<{
    name: string
    size: string
    progress?: number
  } | null>(null)

  const handleFileSelect = (file: File) => {
    setUploadedFile({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} мб`,
      progress: 0,
    })
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadedFile((prev) => {
        if (!prev) return null
        const newProgress = Math.min((prev.progress || 0) + 10, 100)
        if (newProgress >= 100) {
          clearInterval(interval)
        }
        return { ...prev, progress: newProgress }
      })
    }, 200)
  }

  const handleFileRemove = () => {
    setUploadedFile(null)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Импорт xslx">
      <div className="import-xlsx-form">
        <h3 className="section-title">Загрузите документ</h3>
        {uploadedFile ? (
          <FileUpload
            uploadedFile={uploadedFile}
            onFileRemove={handleFileRemove}
          />
        ) : (
          <FileUpload onFileSelect={handleFileSelect} />
        )}
        <div className="modal-actions">
          <button className="form-button secondary" onClick={onClose}>
            Применить для всех подобных строк
          </button>
          <button className="form-button" onClick={onClose}>
            Импортировать
          </button>
        </div>
      </div>
    </Modal>
  )
}

