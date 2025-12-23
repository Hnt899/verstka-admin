import './Pagination.css'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      
      if (currentPage > 3) {
        pages.push('...')
      }
      
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...')
      }
      
      pages.push(totalPages)
    }
    
    return pages
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        «
      </button>
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      
      {getPageNumbers().map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">
              ...
            </span>
          )
        }
        
        return (
          <button
            key={page}
            className={`pagination-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page as number)}
          >
            {page}
          </button>
        )
      })}
      
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      <button
        className="pagination-button"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  )
}

