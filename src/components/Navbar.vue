<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="logo">
          <img src="/assets/logo.png" alt="Softkiss Logo" />
          <span>Softkiss</span>
        </router-link>

        <button
          class="menu-toggle"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span :class="{ active: isMenuOpen }"></span>
        </button>

        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>
          <li>
            <router-link to="/nosotros" @click="closeMenu"
              >Nosotros</router-link
            >
          </li>
          <li>
            <router-link to="/productos" @click="closeMenu"
              >Productos</router-link
            >
          </li>
          <li>
            <router-link to="/contacto" @click="closeMenu"
              >Contacto</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(255, 105, 180, 0.1);
  z-index: 1000;
  padding: 1rem 0;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
}

.logo img {
  height: 40px;
  width: auto;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background: var(--primary);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-toggle span {
  top: 50%;
  transform: translateY(-50%);
}

.menu-toggle span::before,
.menu-toggle span::after {
  content: "";
}

.menu-toggle span::before {
  top: -10px;
}

.menu-toggle span::after {
  top: 10px;
}

.menu-toggle span.active {
  background: transparent;
}

.menu-toggle span.active::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-toggle span.active::after {
  top: 0;
  transform: rotate(-45deg);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-dark);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  text-decoration: none;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.15);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links li {
    text-align: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
  }

  .nav-links li:last-child {
    border-bottom: none;
  }
}
</style>
