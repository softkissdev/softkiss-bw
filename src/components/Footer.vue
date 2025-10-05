<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="/assets/logo.png" alt="Softkiss Logo" />
            <span>Softkiss</span>
          </div>
          <p>Desarrollo de software comercial y a medida</p>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Productos</h4>
            <ul>
              <li><a href="https://terbiz.app" target="_blank">Terbiz</a></li>
              <li><a href="https://jurdex.app" target="_blank">Jurdex</a></li>
              <li><a href="https://focusit.app" target="_blank">FocusIt</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Síguenos</h4>
            <ul>
              <li>
                <a href="https://github.com/softkissdev" target="_blank"
                  >GitHub</a
                >
              </li>
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

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
