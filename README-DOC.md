# 📚 Relatos de Papel - BookStore

Este proyecto es una simulación de una tienda de libros creada con **React**, que utiliza hooks principales y custom hooks para manejar el estado y la lógica del carrito de compras.

---

## 🧪 Simulación de Datos - Mock API Local

Los datos de los libros se encuentran en el archivo: /src/data/books.js

## Nota: Este enfoque permite probar la interfaz sin depender de un backend real. Se utiliza en el componente Home.jsx a través del hook useEffect.


## Hooks Principales Utilizados
### useState
Usado para manejar el estado de:

books, searchTerm, currentPage, itemsPerPage → en Home.jsx

quantity → en BookModal.jsx

modalOpen → en BookCard.jsx

### useEffect
Usado para:

Cargar los datos simulados (booksData) al montar Home.jsx

Ejecutar la redirección automática en Landing.jsx usando useCountdownRedirect

Aplicar filtrado de búsqueda cuando cambia el valor de búsqueda

## 🧩 Custom Hooks Reutilizables
### 🔄 useCart → /hooks/useCart.js
Maneja la lógica del carrito de compras:

Añadir, eliminar, agrupar por ID y vaciar

Incrementar o decrementar cantidades

Devuelve: cart, groupedCart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity

Este hook es usado por:

BookCard.jsx → para añadir libros al carrito

BookModal.jsx → para añadir libros con cantidad seleccionada

Checkout.jsx → para mostrar, modificar y limpiar el carrito

### ⏱ useCountdownRedirect → /hooks/useCountdownRedirect.js
Maneja la lógica de cuenta regresiva con redirección automática.

Recibe como parámetros los segundos y la ruta de destino

Devuelve el contador actualizado

Usado por:

Landing.jsx → redirige a /home tras 5 segundos mostrando una cuenta regresiva.

