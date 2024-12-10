README

#Descargar repo
git clone https://github.com/Renescript/hito-crud-curso-backend-js.git

//Instalar dependencias
npm run dev

//Inicializar contenedor de bd
docker compose up

//Correr queries bases para crear tablas
En src/config/user.sql

//Ir a thunderclient - postman
Registrar un usuario en endpoint con email y password
/api/v1/auth/register
usando el cuerpo:
{
  "email": "1@mail.com",
  "password": "holi1234"
}

Logear usuario usando mismas credenciales en esta ruta
/api/v1/auth/login

Login devuelve el token, copiar el token y reemplazar el bearer en ruta
/api/v1/profile/update-name
Agregar/cambiar nombre de usuario usando este body:
{
  "email": "1@mail.com",
  "name": "holi1234"
}
