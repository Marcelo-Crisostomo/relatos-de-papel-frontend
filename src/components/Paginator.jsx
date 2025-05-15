import React from 'react';
import '../styles/components/_paginator.scss';

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="paginator">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        ← Anterior
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente →
      </button>
    </div>
  );
};

export default Paginator;