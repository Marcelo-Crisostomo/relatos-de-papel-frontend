import React from 'react';
import '../styles/components/_pageSizeSelector.scss';

const PageSizeSelector = ({ itemsPerPage, onChange }) => {
  return (
    <div className="pagination-controls">
      <label>Mostrar:</label>
      <select value={itemsPerPage} onChange={(e) => onChange(Number(e.target.value))}>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
    </div>
  );
};


export default PageSizeSelector;