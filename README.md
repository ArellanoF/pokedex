# 🧪 Proyecto Pokedex - React, Node.js y MySQL

¡Hola joven entrenador!

Soy el Profesor Oak. Justo cuando estaba por abrir el laboratorio, ¡descubrí que mi Pokedex no funciona! No puedo listar mis Pokémon ni registrar nuevos... pero tú has llegado justo a tiempo.

He desarrollado esta Pokedex usando **React** para el frontend, **Node.js + Express** para el backend, y **MySQL** como base de datos. Te necesitaré para ponerla en marcha antes de que empiecen a llegar entrenadores.

---

## 📁 Estructura del proyecto

El repositorio contiene dos carpetas principales:

```
.
├── backend       # API en Node.js con Express y Sequelize
├── frontend      # Aplicación React con Redux
└── pokedex.sql   # Script SQL para inicializar la base de datos
```

---

## ⚙️ Configuración

### 1. Clona el repositorio

```bash
git clone https://github.com/ArellanoF/pokedex
cd pokedex
```

### 2. Importa la base de datos

Abre tu gestor MySQL y ejecuta el script `pokedex.sql` ubicado en la raíz del proyecto.

```bash
mysql -u root -p < pokedex.sql
```

### 3. Configura el backend

Dentro de la carpeta `backend`, crea un archivo `.env` con las siguientes variables:

```env
DB_NAME=pokedex
DB_USER=root
DB_PASS=
DB_HOST=localhost
WEB_PORT=7768
```

Asegúrate de que los datos coincidan con tu configuración local de MySQL.

### 4. Instala dependencias

Ejecuta los siguientes comandos en cada carpeta:

```bash
# En backend/
npm install

# En frontend/
npm install
```

### 5. Ejecuta la aplicación

En dos terminales separadas:

```bash
# Inicia el backend
cd backend
npm run dev

# Inicia el frontend
cd frontend
npm run dev
```

---

## 🎯 Funcionalidades

### ✅ Listado de Pokémon

- Se muestran los **25 Pokémon más pesados** almacenados en la base de datos.
- Se utiliza **Redux** para almacenar y gestionar el estado de los Pokémon.
- Cada Pokémon muestra todos sus atributos registrados.

### ✅ Registro de nuevos Pokémon

- Al pulsar el botón de la esquina superior derecha, se abre un **modal** para registrar un nuevo Pokémon.
- El formulario incluye validaciones: los campos numéricos deben ser mayores a 0.
- Al guardar:
  - Se envía una solicitud POST al backend.
  - Si es exitoso, se muestra una notificación (alert).
  - La tabla de Pokémon se actualiza automáticamente.

---

## 📌 Tecnologías utilizadas

- **Frontend**: React, TypeScript, Redux, Vite
- **Backend**: Node.js, Express, Sequelize, MySQL
- **Base de datos**: MySQL

---

## 🧼 Buenas prácticas aplicadas

- Código completamente tipado (TypeScript).
- Arquitectura organizada por responsabilidades.
- Manejo adecuado de errores en frontend y backend.
- Separación clara entre lógica de presentación y de negocio.

---

## 🛠 Tareas pendientes / mejoras posibles

- Validaciones más avanzadas (por ejemplo, nombre único).
- Tests automatizados (Jest, React Testing Library).
- Mejor diseño con Tailwind o Material UI.

---

¡Gracias por tu ayuda, entrenador! Con tu conocimiento en React y Node, ¡la Pokedex estará lista a tiempo para la apertura del laboratorio!

— Profesor Oak 🧓🏻🔬
