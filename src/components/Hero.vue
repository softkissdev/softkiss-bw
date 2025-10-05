<template>
  <section id="inicio" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">Desarrollamos</span> software que
            <span class="gradient-text">impulsa</span> tu negocio
          </h1>
          <p class="hero-description">
            Soluciones de software comercial y a medida para empresas que buscan
            innovar y crecer.
          </p>
          <div class="hero-buttons">
            <Button variant="primary" @click="$router.push('/productos')">
              Ver Productos
            </Button>
            <Button variant="outline" @click="$router.push('/contacto')">
              Contactar
            </Button>
          </div>
        </div>
        <div class="hero-image">
          <img src="/assets/brand.png" alt="Softkiss Brand" />
          <div class="floating-card card-1">
            <div class="card-icon">💡</div>
            <p>Innovación</p>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon">🚀</div>
            <p>Crecimiento</p>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon">⚡</div>
            <p>Rapidez</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./ui/Button.vue";
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(255, 182, 217, 0.3) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  animation: fadeInUp 0.8s ease-out;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  position: relative;
  animation: fadeIn 1s ease-out 0.3s both;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(255, 105, 180, 0.2);
}

.floating-card {
  position: absolute;
  background: var(--bg-card);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.15);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: float 3s ease-in-out infinite;
}

.card-icon {
  font-size: 1.5rem;
}

.floating-card p {
  font-weight: 600;
  color: var(--text-dark);
  margin: 0;
}

.card-1 {
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: -5%;
  animation-delay: 1s;
}

.card-3 {
  bottom: 15%;
  left: 5%;
  animation-delay: 2s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .floating-card {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-buttons {
    flex-direction: column;
  }
}
</style>
