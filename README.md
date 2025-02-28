# Proyecto Web GO TRAVEL

Este proyecto es una página web que incluye un slider de imágenes, una galería de imagenes, un formulario de contacto, un sistema de cambio de idioma, modo oscuro y un sistema de autenticación utilizando LocalStorage. Todo en un bundle de JavaScript que se maneja con **esbuild** para: Optimizar de recursos, minificar el código, ofuscar el código y preprocesar css. Todo montado en un servidor local http.



## Estructura del Proyecto
/src
    /styles
        styles.scss         // Estilos principales
        dark.scss           // Estilos darkmode
    /scripts
        main.js            // Inicializador de la app
        slider.js          // Controlador del slider de imágenes
        navbar.js          // Manejo del navbar
        form.js            // Validación y manejo del formulario
        i18n.js            // Manejador de idiomas
        darkmode.js        // Configuración y estado del modo oscuro
        auth.js            // Registro y login con LocalStorage
    /assets
        /images   
index.html                // html principal
formulario.html           // Formulario html
login.html                // html de inicio de sesión
signin.html               // html de registro
build.js                  // Configuración de esbuild
README.md                 // Este archivo


## Configuración y Uso

### 1. Instalar dependencias

```bash
npm install
npm init -y
npm install esbuild --save-dev
npm install -g sass
npm install --sabe-dev esbuild-sass-plugin
npm install javascript-obfuscator --save-dev
npm install imagemin imagemin-mozjpeg imagemin-pngquant imagemin-gifsicle imagemin-svgo
npm install esbuild esbuild-plugin-copy html-minifier-terser --save-dev
npm.cmd install http-server -D

```
### 2. Configurar JSON
Asegurarse que el JSON tenga estas 2 lineas:
```json
    "start": "http-server ./dist",
    "build": "node build.js",
```

### 3. Compilar el bundle
```bash
npm run build
```
Esto genera una carpeta `dist/` con todo el código optimizado.

### 4. Servir el proyecto
Se hace mediante
```bash
npm run start
```
---

## Referentes y Material Adicional

- [Documentación esbuild](https://esbuild.github.io/)
- [Guía de LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [Guía rápida de Markdown](https://www.markdownguide.org/)
- [CSS - Dark Mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- [Polyglot.js](https://airbnb.io/polyglot.js/)
- [Sass](https://sass-lang.com/install/)

---
