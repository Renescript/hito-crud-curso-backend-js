# Hito 2 CRUD Curso Backend con Node.js

Este proyecto es un ejemplo práctico de un CRUD desarrollado con Node.js. A continuación, se presentan las instrucciones para clonar el repositorio, configurar el entorno y probar las funcionalidades.

## 🚀 Instrucciones de instalación

### 1. Clonar el repositorio
Clona el proyecto en tu máquina local ejecutando el siguiente comando:
```bash
git clone https://github.com/Renescript/hito-crud-curso-backend-js.git
```

### 2. Instalar dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```

### 3. Iniciar el entorno de desarrollo
Para iniciar el entorno de desarrollo, utiliza el siguiente comando:
```bash
npm run dev
```

### 4. Inicializar la base de datos
Levanta el contenedor de la base de datos utilizando Docker:
```bash
docker compose up
```

### 5. Crear tablas en la base de datos
Ejecuta las consultas SQL necesarias para crear las tablas. Estas se encuentran en el archivo:
```
src/config/user.sql
```

## 📫 Probar la API
Usa herramientas como Thunder Client o Postman para probar los endpoints de la API.

### 1. Registrar un usuario
Envía una solicitud `POST` a la siguiente ruta:
```
/api/v1/auth/register
```
Con el siguiente cuerpo en formato JSON:
```json
{
  "email": "1@mail.com",
  "password": "holi1234"
}
```

### 2. Iniciar sesión
Envía una solicitud `POST` a la ruta:
```
/api/v1/auth/login
```
Usa las mismas credenciales registradas previamente. Esto devolverá un token de autenticación.

### 3. Actualizar nombre de usuario
Copia el token obtenido en el paso anterior y úsalo como un Bearer Token en la cabecera de autorización. Luego, envía una solicitud `PATCH` a:
```
/api/v1/profile/update-name
```

## 🛠 Herramientas necesarias
- **Node.js** v16 o superior
- **Docker**
- **Postman** o **Thunder Client** (para pruebas de API)

## 💡 Notas adicionales
- Asegúrate de que el contenedor de la base de datos esté corriendo antes de interactuar con la API.
- Los tokens de autenticación tienen un tiempo de expiración, usa un token válido para las solicitudes protegidas.

---

¡Disfruta aprendiendo y desarrollando con este proyecto! 💻
