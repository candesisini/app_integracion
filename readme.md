# 🛒 Lista de Compras - Arquitectura en 3 Capas

Una aplicación web simple para gestionar una lista de compras, diseñada con **arquitectura de tres capas**: **Presentación**, **Lógica de Negocio** y **Datos**, utilizando **HTML**, **JavaScript** y **localStorage** (simulando almacenamiento JSON).

---

## 📁 Estructura del Proyecto

### 1. 🖥️ Capa de Presentación (`index.html` y `app.js`)

- **Rol:** Maneja la interfaz y la interacción con el usuario.
- **Responsabilidades:**
  - Mostrar la lista de ítems.
  - Capturar eventos del usuario (clics, entradas de teclado).
  - Renderizar cambios en la interfaz.
- **Características:**
  - Usa `document.getElementById()` y `addEventListener()`.
  - Funciones como `renderizarLista()` actualizan el DOM.
  - No contiene lógica de negocio ni conocimiento del almacenamiento de datos.

---

### 2. ⚙️ Capa de Lógica (`listaLogic.js`)

- **Rol:** Contiene las reglas de negocio y coordina la comunicación entre presentación y datos.
- **Responsabilidades:**
  - Validar operaciones.
  - Gestionar el flujo de datos.
  - Proveer una API clara a la capa de presentación.
- **Características:**
  - Incluye la clase `ListaLogic`.
  - Métodos como `agregarItem()`, `toggleEstadoItem()`, `contarItems()`.
  - Llama a la capa de datos sin conocer su implementación interna.

---

### 3. 💾 Capa de Datos (`listaData.js`)

- **Rol:** Gestiona la persistencia de datos usando `localStorage`.
- **Responsabilidades:**
  - Almacenamiento y recuperación de ítems.
  - Operaciones CRUD básicas.
- **Características:**
  - Incluye la clase `ListaData`.
  - Métodos como `cargarItems()`, `guardarItems()`, `eliminarItem()`.
  - Simula el almacenamiento en JSON a través de `localStorage`.

---

## ✅ Beneficios de esta Arquitectura

- **🔄 Separación de preocupaciones:** Cada capa tiene una responsabilidad bien definida, lo que facilita la organización del código.
- **🔧 Mantenibilidad:** Las capas pueden modificarse o actualizarse de forma independiente sin afectar a las demás.
- **🧪 Testeabilidad:** Es posible probar cada módulo por separado, lo que mejora la calidad del código.
- **📈 Escalabilidad:** La estructura modular permite incorporar nuevas funcionalidades (por ejemplo, reemplazar `localStorage` por una API real) sin reestructurar toda la aplicación.

---

## 🔁 Diagrama de Flujo

```plaintext
Usuario 
  ↓
[ Presentación (app.js) ]
  ↓
[ Lógica (listaLogic.js) ]
  ↓
[ Datos (listaData.js) ]

← ← ← Flujo de respuesta
