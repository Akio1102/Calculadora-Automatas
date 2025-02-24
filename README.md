# Proyecto Calculadora de Autómatas

Este proyecto es una calculadora diseñada para operar con autómatas.

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (opcional, si deseas ejecutar fuera de Docker)

## 📦 Construcción y Ejecución con Docker

### 1️⃣ Construir la imagen Docker

Ejecuta el siguiente comando en la raíz del proyecto:

```sh
docker build -t calculadora-automatas .
```

### 2️⃣ Ejecutar el contenedor

Para correr la aplicación en un contenedor, usa:

```sh
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules --rm calculadora-automatas
```

Esto hará lo siguiente:

- Expone la aplicación en `http://localhost:3000`
- Usa volúmenes para mantener la sincronización del código con el contenedor
- Elimina el contenedor al detener la ejecución

### 3️⃣ Acceder a la aplicación

Una vez el contenedor esté corriendo, abre tu navegador en:

```
http://localhost:3000
```

## 🏗️ Construcción para Producción

Si deseas construir la aplicación para producción, sigue estos pasos:

1. Modifica el `Dockerfile` y reemplaza el `CMD` actual por:

   ```Dockerfile
   CMD ["npx", "run", "build"]
   ```

2. Construye nuevamente la imagen con:

   ```sh
   docker build -t calculadora-automatas .
   ```

3. Ejecuta el contenedor con:

   ```sh
   docker run -p 3000:3000 --rm calculadora-automatas
   ```

Esto asegurará que la aplicación se ejecute en modo de producción.

## 🛠️ Notas de Desarrollo

- El contenedor está basado en `node:lts`.
- La aplicación se ejecuta con `npx rsbuild dev` para desarrollo.
- El puerto **3000** debe estar libre en tu máquina.

## 🛑 Detener el contenedor

Si ejecutaste la aplicación en modo interactivo (`docker run`), puedes detenerla con:

```sh
Ctrl + C
```

o buscar el `CONTAINER_ID` y detenerlo con:

```sh
docker stop <CONTAINER_ID>
```

## 🔥 Eliminación de contenedores e imágenes

Para limpiar contenedores en ejecución y la imagen creada:

```sh
docker rm -f $(docker ps -aq) && docker rmi calculadora-automatas
```

---
