<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="/assets/logo-transparent.png" alt="Softkiss Logo" />
            <span>Softkiss</span>
          </div>
          <p>Desarrollo de software comercial y a medida</p>
          <div class="social-links">
            <a
              href="https://www.facebook.com/softkissdev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/softkissdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Suite Empresarial</h4>
            <ul>
              <li><a href="https://terbiz.app" target="_blank">Terbiz</a></li>
              <li><a href="https://upmet.app" target="_blank">Upmet</a></li>
              <li><a href="https://jurdex.app" target="_blank">Jurdex</a></li>
              <li><a href="https://relnet.app" target="_blank">Relnet</a></li>
              <li><a href="https://sellit.app" target="_blank">Sellit</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>SK Tools</h4>
            <ul>
              <li><a href="https://sktools.app" target="_blank">sktools.app</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Empresa</h4>
            <ul>
              <li><router-link to="/nosotros">Sobre Nosotros</router-link></li>
              <li><router-link to="/productos">Productos</router-link></li>
              <li><router-link to="/contacto">Contacto</router-link></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Softkiss. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--secondary) 100%
  );
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.brand-logo img {
  height: 40px;
  width: auto;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-column ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-column a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.footer-column a:hover {
  color: white;
  transform: translateX(3px);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
