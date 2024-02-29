## Descripcion

Guia para levantar el proyecto de forma local.

## Levantar el proyecto

1. Clonar el proyecto de github
2. Levantar un contendor de docker con el servidor de REDIS
3. Instalar las depencias ```npm ci```
4. Crear un archivo .env con las siguientes variables en la carpeta root:
```
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET_KEY=clave_muy_secreta
```
5. Ejecutar el comando ````npm run start:dev```` para iniciar el servidor
6. El servido se ejecuta por defecto en el puerto localhost:3000
 
## Ejecutar pruebas unitarias
1. Ejecutar el comando ````npm run test:cov```` para ver el porcentaje de cobertura

## Crear el build del proyecto
1. Ejecutar el comando ````npm run build```` y se generara una carpeta dist donde se encuentra el codigo transpilado
