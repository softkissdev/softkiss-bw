<template>
  <section id="nosotros" class="about">
    <div class="container">
      <SectionTitle
        title="Sobre Nosotros"
        subtitle="Desarrolladora de software con pasión por la innovación"
      />

      <div class="about-content">
        <Card class="about-card">
          <template #icon>🎯</template>
          <template #title>Nuestra Misión</template>
          <template #content>
            Crear soluciones de software innovadoras que impulsen el crecimiento
            de nuestros clientes, combinando tecnología de punta con un diseño
            excepcional.
          </template>
        </Card>

        <Card class="about-card">
          <template #icon>💼</template>
          <template #title>Experiencia</template>
          <template #content>
            Desarrollamos software comercial y soluciones a medida, adaptándonos
            a las necesidades específicas de cada empresa con calidad y
            profesionalismo.
          </template>
        </Card>

        <Card class="about-card">
          <template #icon>⚡</template>
          <template #title>Innovación</template>
          <template #content>
            Utilizamos las tecnologías más modernas para crear aplicaciones web
            robustas, escalables y con una experiencia de usuario excepcional.
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "./ui/SectionTitle.vue";
import Card from "./ui/Card.vue";
</script>

<style scoped>
.about {
  padding: 6rem 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--bg-secondary) 50%,
    transparent 100%
  );
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.about-card {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.about-card:nth-child(1) {
  animation-delay: 0.1s;
}

.about-card:nth-child(2) {
  animation-delay: 0.2s;
}

.about-card:nth-child(3) {
  animation-delay: 0.3s;
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
</style>
