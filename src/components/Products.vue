<template>
  <section id="productos" class="products">
    <div class="container">
      <SectionTitle
        title="Nuestros Productos"
        subtitle="Soluciones innovadoras para impulsar tu negocio"
      />

      <div class="products-grid">
        <ProductCard
          name="Terbiz"
          url="terbiz.app"
          description="Plataforma de gestión empresarial completa para optimizar procesos y aumentar la productividad."
          icon="📊"
          color="#FFB6D9"
        />

        <ProductCard
          name="Jurdex"
          url="jurdex.app"
          description="Sistema especializado para la gestión jurídica, facilitando el trabajo de profesionales del derecho."
          icon="⚖️"
          color="#DDA0DD"
        />

        <ProductCard
          name="FocusIt"
          url="focusit.app"
          description="Herramienta de productividad y gestión del tiempo para maximizar tu enfoque y eficiencia."
          icon="🎯"
          color="#E6B8E6"
        />
      </div>

      <div class="custom-solutions">
        <Card class="custom-card">
          <template #icon>🛠️</template>
          <template #title>Soluciones a Medida</template>
          <template #content>
            ¿Necesitas algo específico? Desarrollamos software personalizado que
            se adapta perfectamente a las necesidades únicas de tu negocio.
          </template>
          <template #footer>
            <Button variant="outline" @click="scrollToContact">
              Solicitar Consulta
            </Button>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "./ui/SectionTitle.vue";
import ProductCard from "./ui/ProductCard.vue";
import Card from "./ui/Card.vue";
import Button from "./ui/Button.vue";

const scrollToContact = () => {
  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.products {
  padding: 6rem 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.custom-solutions {
  margin-top: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.custom-card {
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--accent) 100%
  );
  color: white;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
