# Softkiss Business Website - Deployment Guide

## 🚀 CI/CD Setup

Este proyecto tiene configurado CI/CD automático con GitHub Actions.

### Workflows Configurados

#### 1. **Build and Test** (`ci.yml`)
- Se ejecuta en: `main`, `development` y PRs
- Funciones:
  - ✅ Instala dependencias
  - ✅ Hace build del proyecto
  - ✅ Ejecuta tests (cuando se agreguen)
  - ✅ Sube artefactos de build

#### 2. **Deploy to Production** (`deploy.yml`)
- Se ejecuta en: `production`
- Funciones:
  - ✅ Build del proyecto
  - ✅ Deploy automático al servidor vía SSH

### 📋 Configuración de Secrets

Para que el deploy automático funcione, debes configurar los siguientes **Secrets** en GitHub:

1. Ve a: `https://github.com/softkissdev/softkiss-bw/settings/secrets/actions`

2. Agrega los siguientes secrets:

| Secret Name | Descripción | Ejemplo |
|-------------|-------------|---------|
| `SSH_HOST` | IP o dominio del servidor | `123.45.67.89` o `server.softkiss.dev` |
| `SSH_USER` | Usuario SSH | `deploy` o `root` |
| `SSH_PORT` | Puerto SSH | `22` |
| `SSH_PRIVATE_KEY` | Clave privada SSH | Contenido de `~/.ssh/id_rsa` |
| `DEPLOY_PATH` | Ruta en el servidor | `/var/www/softkiss-bw` |

### 🔑 Generar SSH Key para Deploy

En tu servidor, ejecuta:

```bash
# Generar nueva clave SSH
ssh-keygen -t ed25519 -C "deploy@softkiss-bw" -f ~/.ssh/softkiss_deploy

# Agregar la clave pública al servidor
cat ~/.ssh/softkiss_deploy.pub >> ~/.ssh/authorized_keys

# Copiar la clave privada (esto va en GitHub Secrets como SSH_PRIVATE_KEY)
cat ~/.ssh/softkiss_deploy
```

### 🎯 Flujo de Trabajo

1. **Desarrollo**: Trabaja en la rama `development`
   ```bash
   git checkout development
   git add .
   git commit -m "feat: nueva funcionalidad"
   git push origin development
   ```

2. **Testing**: Merge a `main` para testing
   ```bash
   git checkout main
   git merge development
   git push origin main
   ```

3. **Producción**: Merge a `production` para deploy automático
   ```bash
   git checkout production
   git merge main
   git push origin production
   # ⚡ El deploy se ejecuta automáticamente
   ```

### 🖥️ Configuración en el Servidor

En tu servidor, prepara el directorio:

```bash
# Crear directorio de deploy
sudo mkdir -p /var/www/softkiss-bw
sudo chown $USER:$USER /var/www/softkiss-bw

# Clonar el repositorio
cd /var/www/softkiss-bw
git clone https://github.com/softkissdev/softkiss-bw.git .
git checkout production

# Instalar dependencias
npm ci
npm run build

# Configurar servidor web (nginx/apache) apuntando a /var/www/softkiss-bw/dist
```

### 🌐 Configuración Nginx (Ejemplo)

```nginx
server {
    listen 80;
    server_name softkiss.dev www.softkiss.dev;
    
    root /var/www/softkiss-bw/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### ✅ Verificar Deploy

Después de hacer push a `production`, verifica:
- GitHub Actions: `https://github.com/softkissdev/softkiss-bw/actions`
- Tu sitio web debería actualizarse automáticamente

---

¿Problemas? Revisa los logs en GitHub Actions.
