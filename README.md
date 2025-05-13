# 📚 Relatos de Papel – Frontend

Aplicación web desarrollada como parte del proyecto transversal del Máster en Ingeniería de Software. Este repositorio contiene el **frontend del proyecto**, construido con **React**, utilizando buenas prácticas en componentes, rutas, hooks, diseño responsive y despliegue profesional.

---

## 🚀 Objetivo del Proyecto

Desarrollar una tienda web de libros inspirada en el proyecto "Relatos de Papel", aplicando:

- HTML5, CSS3, JavaScript moderno (ES6+)
- Librería React con enfoque en componentes funcionales
- Uso de React Router y Hooks (useState, useEffect, custom)
- Estilos con CSS, BEM, Tailwind o SCSS
- Arquitectura escalable para futura integración con backend en microservicios
- Despliegue profesional en plataformas como **Vercel**

---

## 🧩 Estructura del Proyecto

```

relatos-de-papel-frontend/
│
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables (BookCard, Header, Footer, etc.)
│   ├── pages/              # Vistas principales (Landing, Home, BookDetail, Checkout)
│   ├── styles/             # Archivos de estilo CSS o Tailwind (con BEM si aplica)
│   ├── assets/             # Imágenes y recursos
│   ├── data/               # JSON mocks y datos estáticos
│   ├── App.jsx             # Enrutador principal
│   └── main.jsx            # Entrada principal de React
├── .gitignore              # Archivos a excluir del control de versiones
├── README.md               # Documentación del proyecto
├── package.json            # Configuración de dependencias
└── vite.config.js          # Configuración de Vite (o CRA config si aplica)

````

---

## 🛠️ Instalación local

Para clonar y ejecutar este proyecto en tu entorno local:

```bash
git clone https://github.com/tu-usuario/relatos-de-papel-frontend.git
cd relatos-de-papel-frontend
npm install
npm run dev
````

Abrir en navegador: `http://localhost:5173`

---

## 👥 Equipo de Desarrollo

| Nombre                          | Rol                                            |
| ------------------------------- | ---------------------------------------------- |
| **Marcelo Crisóstomo Carrasco** | Frontend – Coordinación, configuración inicial |
| **Christian Nivela**            | Bases de datos y documentación técnica         |
| **Laura Paterni**               | Frontend avanzado y pruebas (testing)          |
| **José Jiménez**                | Backend y despliegue general       |

---

## 🧱 Fases del Proyecto

### 🟦 FASE 1 – Planificación y configuración inicial (Día 1-2)

**Responsable:** Marcelo Crisóstomo Carrasco

* Creación del repositorio en GitHub
* Configuración de ramas (`main`, `dev`, `feature/*`)
* Inicialización con Vite
* Estructura de carpetas
* `.gitignore` profesional
* Wireframe de vistas iniciales
* Documentación base (`README.md`)

---

### 🟨 FASE 2 – Desarrollo de componentes y navegación (Día 3-6)

**Responsable:** Laura Paterni

* Desarrollo de 10+ componentes funcionales
* Integración de React Router v6 con al menos 4 rutas
* Creación de vistas: landing, home, detalle de libro, checkout
* Coordinación de diseño con responsable de estilos

---

### 🟧 FASE 3 – Hooks, lógica de datos y carrito (Día 7)

**Responsable:** Christian Nivela

* Implementación de `useState`, `useEffect`
* Creación de custom hook (`useCart`, `useRedirect`, etc.)
* Simulación de datos de libros con JSON local
* Implementación completa del carrito y alertas

---

### 🟩 FASE 4 – Estilos, responsive y despliegue (Día 8)

**Responsable:** José Jiménez

* Aplicación de estilos con CSS/SCSS o Tailwind
* Metodología BEM si aplica
* Diseño responsive para móviles y escritorio
* Despliegue en Vercel u otra plataforma
* Generación del archivo `URL.txt` con enlace público

---

### 🟪 FASE 5 – Videomemoria y empaquetado final (Día 9-10)

**Responsable:** Marcelo Crisóstomo Carrasco

* Grabación y edición de la videomemoria (máx. 10 minutos)

  * Componentes, hooks, rutas, vistas y despliegue
* Empaquetado de entrega:

  * Carpeta del proyecto sin `node_modules`
  * `URL.txt`
  * Videomemoria `.mp4`
  * Archivo `.zip` final para la entrega

---

## 🎯 Funcionalidades Mínimas

* ✅ **Landing page con redirección automática tras 5 segundos**
* ✅ **Vista principal con barra de búsqueda (filtrado por título)**
* ✅ **Vista de detalle del libro (BookDetail)**
* ✅ **Carrito persistente con posibilidad de eliminar elementos**
* ✅ **Vista de checkout con resumen, alerta de pedido y redirección**

---

## 🌐 Despliegue

* 🔗 URL del sitio en producción: *(por definir – se incluirá en URL.txt)*
* Plataforma utilizada: **Vercel**

---

## 📝 Licencia

© 2025 - Proyecto académico desarrollado para la Universidad Internacional de La Rioja (UNIR).

```