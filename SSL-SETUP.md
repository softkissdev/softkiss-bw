# 🔐 SSL/TLS Setup - Let's Encrypt

## Información del Certificado

- **Dominio principal:** softkiss.dev
- **Dominio alternativo:** www.softkiss.dev
- **Proveedor:** Let's Encrypt
- **Tipo:** ECDSA
- **Válido hasta:** 2026-01-05
- **Renovación:** Automática (certbot timer)

## Rutas de Certificados

```bash
# Certificado completo (con cadena)
/etc/letsencrypt/live/softkiss.dev/fullchain.pem

# Clave privada
/etc/letsencrypt/live/softkiss.dev/privkey.pem

# Parámetros Diffie-Hellman
/etc/letsencrypt/ssl-dhparams.pem
```

## Configuración de Nginx

El certificado se integra automáticamente en `/etc/nginx/sites-available/softkiss.dev`:

```nginx
server {
    listen 443 ssl;
    listen [::]:443 ssl ipv6only=on;
    server_name softkiss.dev www.softkiss.dev;

    ssl_certificate /etc/letsencrypt/live/softkiss.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/softkiss.dev/privkey.pem;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Resto de la configuración...
}

# Redirect HTTP → HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name softkiss.dev www.softkiss.dev;
    return 301 https://$server_name$request_uri;
}
```

## Instalación Inicial

```bash
# 1. Instalar Certbot
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# 2. Obtener certificado
sudo certbot --nginx \
  -d softkiss.dev \
  -d www.softkiss.dev \
  --non-interactive \
  --agree-tos \
  --email jose@softkiss.dev \
  --redirect
```

## Renovación Automática

Certbot configura automáticamente un timer systemd para renovar el certificado:

```bash
# Verificar estado del timer
sudo systemctl status certbot.timer

# Ver próxima ejecución
sudo systemctl list-timers certbot.timer

# Probar renovación (dry-run)
sudo certbot renew --dry-run
```

## Comandos Útiles

```bash
# Ver certificados instalados
sudo certbot certificates

# Renovar manualmente
sudo certbot renew

# Revocar certificado
sudo certbot revoke --cert-name softkiss.dev

# Eliminar certificado
sudo certbot delete --cert-name softkiss.dev

# Ver logs
sudo tail -f /var/log/letsencrypt/letsencrypt.log
```

## Verificación

```bash
# Test de conexión HTTPS
curl -I https://softkiss.dev

# Test de redirect HTTP → HTTPS
curl -I http://softkiss.dev

# Verificar configuración SSL (online)
# https://www.ssllabs.com/ssltest/analyze.html?d=softkiss.dev
```

## Características de Seguridad

- ✅ **TLS 1.2+**: Protocolos seguros únicamente
- ✅ **Perfect Forward Secrecy**: Parámetros DH
- ✅ **HSTS**: HTTP Strict Transport Security (recomendado agregar)
- ✅ **Auto-renewal**: Renovación automática antes de expiración
- ✅ **HTTP Redirect**: Tráfico HTTP redirige a HTTPS

## Agregar HSTS (Recomendado)

Para mejorar la seguridad, agregar a la configuración de Nginx:

```nginx
# En el bloque server {} de HTTPS
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

## Troubleshooting

### Problema: Certificado no se renueva

```bash
# Verificar timer
sudo systemctl status certbot.timer

# Reiniciar timer
sudo systemctl restart certbot.timer

# Renovar manualmente
sudo certbot renew --force-renewal
```

### Problema: Error en nginx después de renovación

```bash
# Recargar nginx
sudo systemctl reload nginx

# Si falla, revisar logs
sudo journalctl -u nginx -n 50
```

### Problema: DNS no resuelve

```bash
# Verificar DNS
nslookup softkiss.dev
dig softkiss.dev

# Debe apuntar a: 3.94.176.65
```

## Notas

- El certificado se renueva automáticamente 30 días antes de expirar
- Let's Encrypt emite certificados válidos por 90 días
- La renovación automática está configurada mediante systemd timer
- No requiere intervención manual para renovaciones

## Referencias

- [Let's Encrypt](https://letsencrypt.org/)
- [Certbot Documentation](https://certbot.eff.org/)
- [Nginx SSL Configuration](https://nginx.org/en/docs/http/configuring_https_servers.html)
