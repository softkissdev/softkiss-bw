<template>
  <section id="nosotros" class="about">
    <div class="container">
      <SectionTitle
        title="Sobre Nosotros"
        subtitle="Desarrolladora de software con pasión por la innovación"
      />

      <div class="about-content">
        <Card class="about-card mission-vision">
          <template #icon>🎯</template>
          <template #title>Nuestra Misión</template>
          <template #content>
            Crear soluciones innovadoras de software que impulsen el crecimiento 
            empresarial y personal de nuestros clientes, utilizando la mejor 
            tecnología adaptada a sus necesidades específicas, con calidad, 
            compromiso y excelencia en cada proyecto.
          </template>
        </Card>

        <Card class="about-card mission-vision">
          <template #icon>🌟</template>
          <template #title>Nuestra Visión</template>
          <template #content>
            Ser el aliado tecnológico de referencia en América Latina, 
            reconocidos por transformar ideas en soluciones digitales exitosas 
            que generen valor real y sostenible para empresas y personas.
          </template>
        </Card>
      </div>

      <div class="about-values">
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

        <Card class="about-card">
          <template #icon>🤝</template>
          <template #title>Compromiso</template>
          <template #content>
            Nos comprometemos con el éxito de nuestros clientes, brindando 
            soporte continuo y evolución constante de nuestras soluciones para 
            garantizar resultados duraderos.
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
}

.about-values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.about-card {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.about-card.mission-vision {
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--accent) 100%
  );
  color: white;
  border: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
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

@media (max-width: 768px) {
  .about-content,
  .about-values {
    grid-template-columns: 1fr;
  }
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
