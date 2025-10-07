# 🌸 Softkiss Business Website

> Sitio web corporativo de Softkiss - Desarrolla## 🚀 Deployment

Este proyecto se despliega automáticamente usando [webhook-deployer](https://github.com/softkissdev/webhook-deployer) con estrategia blue-green.

**Server:** AWS EC2 - Ubuntu 24.04  
**URL:** https://softkiss.dev (SSL/TLS con Let's Encrypt)

**Hacer deployment:**
```bash
git tag -a v1.x.x -m "Release description"
git push origin v1.x.x
```

El sistema automáticamente:
- ✅ Clona el código
- ✅ Instala dependencias (`npm ci`)
- ✅ Construye la aplicación (`npm run build`)
- ✅ Despliega con zero-downtime
- ✅ Recarga nginx

**Tiempo de deployment:** ~7 segundos

### 🔐 SSL/TLS

- Certificado: Let's Encrypt (ECDSA)
- Renovación automática configurada
- HTTP → HTTPS redirect automático
- Dominios: softkiss.dev, www.softkiss.dev
- Válido hasta: 2026-01-05omercial y a medida.

[![Deployment](https://img.shields.io/badge/deployment-automated-success)](https://softkiss.dev)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646cff)](https://vitejs.dev/)

🌐 **Live:** [https://softkiss.dev](https://softkiss.dev)

## 🚀 Productos

- **[Terbiz](https://terbiz.app)** - Plataforma de gestión empresarial
- **[Jurdex](https://jurdex.app)** - Sistema de gestión jurídica
- **[FocusIt](https://focusit.app)** - Herramienta de productividad

## ✨ SK Tools

Suite de herramientas gratuitas para productividad:
- Conversor de documentos (PDF, Word, Excel)
- Editor y compresor de imágenes
- Procesador de video y audio
- Generador y rastreador de códigos QR

## 🛠️ Tecnologías

- Vue 3
- Vite
- CSS moderno con variables CSS

## 📦 Instalación

```bash
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 👀 Preview

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
softkiss-bw/
├── assets/           # Imágenes y recursos
├── src/
│   ├── components/   # Componentes principales
│   │   ├── ui/      # Componentes UI reutilizables
│   │   ├── Navbar.vue
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Products.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Diseño

El sitio usa una paleta de colores pastel clara inspirada en el branding de Softkiss, con tonos rosa y lavanda que crean una apariencia moderna y profesional.

## � Deployment

Este proyecto se despliega automáticamente usando [webhook-deployer](https://github.com/softkissdev/webhook-deployer) con estrategia blue-green.

**Hacer deployment:**
```bash
git tag -a v1.x.x -m "Release description"
git push origin v1.x.x
```

El sistema automáticamente:
- ✅ Clona el código
- ✅ Instala dependencias (`npm ci`)
- ✅ Construye la aplicación (`npm run build`)
- ✅ Despliega con zero-downtime
- ✅ Recarga nginx

**Tiempo de deployment:** ~7 segundos

## �📄 Licencia

© 2025 Softkiss. Todos los derechos reservados.
