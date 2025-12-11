# Festival de Música - Guía de Instalación y Configuración

## 📋 Descripción
Proyecto web para un festival de música desarrollado con HTML, SASS, Gulp y NPM para optimización de recursos.

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:

- **Node.js** (versión 14 o superior)
- **npm** (viene incluido con Node.js)

### Verificar instalación
Ejecuta estos comandos en la terminal para verificar que estén instalados:

```bash
node --version
npm --version
```

Si no los tienes instalados, descarga Node.js desde: https://nodejs.org/

## 🚀 Instalación del Proyecto

### 1. Clonar o copiar el proyecto
Copia todos los archivos del proyecto a tu computadora, **EXCEPTO** la carpeta `node_modules`.

### 2. Navegar a la carpeta del proyecto
Abre la terminal y navega hasta la carpeta del proyecto:

```bash
cd "ruta/donde/copiaste/el/proyecto"
```

### 3. Instalar dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

Este comando instalará automáticamente:
- gulp
- gulp-sass
- gulp-terser
- sass

## 🎯 Comandos Disponibles

Una vez instaladas las dependencias, puedes usar los siguientes comandos:

### Modo Desarrollo (Recomendado)
```bash
npm run dev
```
- Inicia Gulp en modo watch
- Compila automáticamente los archivos SCSS cuando detecta cambios
- Ideal para desarrollo activo

### Compilar CSS con Gulp
```bash
npm run css
```
- Compila los archivos SCSS una sola vez usando Gulp
- Genera los archivos CSS en la carpeta `build/css`

### Compilar SASS directamente
```bash
npm run sass
```
- Compila SASS en modo watch sin usar Gulp
- Genera los archivos CSS en la carpeta `dist/css`

## 📁 Estructura del Proyecto

```
festivalmusica-PerformanceWeb-Inicio/
├── src/                    # Archivos fuente
│   └── scss/              # Archivos SASS
│       └── app.scss       # Archivo principal SASS
├── build/                 # Archivos compilados por Gulp
│   └── css/              # CSS generado por Gulp
├── dist/                  # Archivos compilados por SASS
│   └── css/              # CSS generado por SASS
├── video/                 # Archivos de video
├── index.html            # Página principal
├── package.json          # Dependencias del proyecto
├── gulpfile.js           # Configuración de Gulp
└── README.md             # Este archivo
```

## 🔄 Flujo de Trabajo

1. **Instalar dependencias** (solo la primera vez):
   ```bash
   npm install
   ```

2. **Iniciar modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Editar archivos SCSS** en la carpeta `src/scss/`

4. **Los cambios se compilarán automáticamente** a CSS

5. **Abrir `index.html`** en el navegador para ver los cambios

## ⚠️ Notas Importantes

- **NO subas la carpeta `node_modules`** a repositorios o al transferir el proyecto. Esta carpeta se genera automáticamente con `npm install`.
- **NO elimines** los archivos `package.json` y `package-lock.json`, son esenciales para el proyecto.
- Si encuentras errores al instalar, intenta eliminar `node_modules` y `package-lock.json`, luego ejecuta `npm install` nuevamente.

## 🐛 Solución de Problemas

### Error: "gulp no se reconoce como comando"
**Solución**: Ejecuta `npm install` nuevamente para asegurarte de que todas las dependencias estén instaladas.

### Error al compilar SASS
**Solución**: Verifica que el archivo `src/scss/app.scss` exista y no tenga errores de sintaxis.

### El proyecto no compila en otra computadora
**Solución**: 
1. Elimina la carpeta `node_modules`
2. Elimina el archivo `package-lock.json`
3. Ejecuta `npm install` nuevamente

## 👨‍💻 Autor
Reiner Jimenez

## 📄 Licencia
ISC
