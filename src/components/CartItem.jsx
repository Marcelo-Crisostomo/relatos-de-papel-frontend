// src/components/CartItem.jsx
import React from 'react';
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const handleRemove = () => {
    Swal.fire({
      title: '¿Eliminar libro?',
      text: '¿Deseas quitar este libro del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        onRemove(item.id);
        setTimeout(() => {
          Swal.fire('Eliminado', 'El libro fue quitado del carrito.', 'success');
        }, 0);
      }
    });
  };

  const handleShowModal = () => {
    Swal.fire({
      title: item.title,
      text: item.synopsis || 'Sin descripción disponible.',
      imageUrl: item.image,
      imageAlt: item.title,
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md p-4 gap-4">
      {/* Imagen con modal */}
      <div className="w-32 h-32 cursor-pointer" onClick={handleShowModal}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded border"
        />
      </div>

      {/* Información */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-500">Precio unitario: ${item.price.toFixed(2)}</p>

        {/* Controles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDecrease(item.id)}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
            −
          </button>
          <span className="text-md">{item.quantity}</span>
          <button
            onClick={() => onIncrease(item.id)}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* Total y eliminar */}
      <div className="flex flex-col items-end gap-2">
        <p className="text-lg font-bold text-blue-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          title="Eliminar libro"
          className="text-red-500 hover:text-red-700 transition"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;